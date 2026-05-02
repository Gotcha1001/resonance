// import { auth } from "@clerk/nextjs/server";
// import { parseBuffer } from "music-metadata";
// import { z } from "zod";
// import { prisma } from "@/lib/db";
// import { uploadAudio } from "@/lib/r2";
// import { VOICE_CATEGORIES } from "@/features/voices/data/voice-categories";
// import type { VoiceCategory } from "@/generated/prisma/client";

// const createVoiceSchema = z.object({
//   name: z.string().min(1, "Voice name is required"),
//   category: z.enum(VOICE_CATEGORIES as [VoiceCategory, ...VoiceCategory[]]),
//   language: z.string().min(1, "Language is required"),
//   description: z.string().nullish(),
// });

// const MAX_UPLOAD_SIZE_BYTES = 20 * 1024 * 1024; //20MB
// const MIN_AUDIO_DURATION_SECONDS = 10;

// export async function POST(request: Request) {
//   const { userId, orgId } = await auth();

//   if (!userId || !orgId) {
//     return Response.json({ error: "Unauthorized" }, { status: 401 });
//   }
//   const url = new URL(request.url);

//   const validation = createVoiceSchema.safeParse({
//     name: url.searchParams.get("name"),
//     category: url.searchParams.get("category"),
//     language: url.searchParams.get("language"),
//     description: url.searchParams.get("description"),
//   });
//   if (!validation.success) {
//     return Response.json(
//       {
//         error: "Invalid input",
//         issues: validation.error.issues,
//       },
//       { status: 400 },
//     );
//   }
//   const { name, category, language, description } = validation.data;
//   const fileBuffer = await request.arrayBuffer();

//   if (!fileBuffer.byteLength) {
//     return Response.json(
//       { error: "Please upload an audio file" },
//       { status: 400 },
//     );
//   }

//   if (fileBuffer.byteLength > MAX_UPLOAD_SIZE_BYTES) {
//     return Response.json(
//       { error: "Audio file exceeded the 20 MB size limit" },
//       { status: 413 },
//     );
//   }
//   const contentType = request.headers.get("content-type");

//   if (!contentType) {
//     return Response.json(
//       { error: "Missing Content-Type header" },
//       { status: 400 },
//     );
//   }

//   const normalizedContentType =
//     contentType.split(";")[0]?.trim() || "audio/wav";

//   // Validate audio format and duration
//   let duration: number;
//   try {
//     const metadata = await parseBuffer(
//       new Uint8Array(fileBuffer),
//       { mimeType: normalizedContentType },
//       { duration: true },
//     );
//     duration = metadata.format.duration ?? 0;
//   } catch {
//     return Response.json(
//       { error: "File is not a valid audio file" },
//       { status: 422 },
//     );
//   }
//   if (duration < MIN_AUDIO_DURATION_SECONDS) {
//     return Response.json(
//       {
//         error: `Audio too short (${duration.toFixed(1)}s). Minimum duration is ${MIN_AUDIO_DURATION_SECONDS} seconds.`,
//       },
//       { status: 422 },
//     );
//   }

//   let createdVoiceId: string | null = null;
//   try {
//     const voice = await prisma.voice.create({
//       data: {
//         name,
//         variant: "CUSTOM",
//         orgId,
//         description,
//         category,
//         language,
//       },
//       select: {
//         id: true,
//       },
//     });
//     createdVoiceId = voice.id;
//     const r2ObjectKey = `voices/org/${orgId}/${voice.id}`;

//     await uploadAudio({
//       buffer: Buffer.from(fileBuffer),
//       key: r2ObjectKey,
//       contentType: normalizedContentType,
//     });
//     await prisma.voice.update({
//       where: {
//         id: voice.id,
//       },
//       data: {
//         r2ObjectKey,
//       },
//     });
//   } catch {
//     if (createdVoiceId) {
//       await prisma.voice
//         .delete({
//           where: {
//             id: createdVoiceId,
//           },
//         })
//         .catch(() => {});
//     }
//     return Response.json(
//       { error: "Failed to create voice. Please retry." },
//       { status: 500 },
//     );
//   }
//   return Response.json(
//     { name, message: "Voice created successfully" },
//     { status: 201 },
//   );
// }
// import { execFile } from "child_process";
// import { tmpdir } from "os";
// import { join } from "path";
// import { writeFile, readFile, unlink } from "fs/promises";
// import { randomUUID } from "crypto";
// import { auth } from "@clerk/nextjs/server";
// import { parseBuffer } from "music-metadata";
// import { z } from "zod";
// import { prisma } from "@/lib/db";
// import { uploadAudio } from "@/lib/r2";
// import { VOICE_CATEGORIES } from "@/features/voices/data/voice-categories";
// import type { VoiceCategory } from "@/generated/prisma/client";
// import { polar } from "@/lib/polar";

// const createVoiceSchema = z.object({
//   name: z.string().min(1, "Voice name is required"),
//   category: z.enum(VOICE_CATEGORIES as [VoiceCategory, ...VoiceCategory[]]),
//   language: z.string().min(1, "Language is required"),
//   description: z.string().nullish(),
// });

// const MAX_UPLOAD_SIZE_BYTES = 20 * 1024 * 1024;
// const MIN_AUDIO_DURATION_SECONDS = 10;

// async function convertToWav(inputBuffer: Buffer): Promise<Buffer> {
//   const id = randomUUID();
//   const inputPath = join(tmpdir(), `voice-in-${id}`);
//   const outputPath = join(tmpdir(), `voice-out-${id}.wav`);

//   await writeFile(inputPath, inputBuffer);

//   await new Promise<void>((resolve, reject) => {
//     execFile(
//       "ffmpeg",
//       [
//         "-y",
//         "-i",
//         inputPath,
//         "-ac",
//         "1",
//         "-ar",
//         "44100",
//         "-acodec",
//         "pcm_s16le",
//         "-f",
//         "wav",
//         outputPath,
//       ],
//       (error, _stdout, stderr) => {
//         if (error) reject(new Error(stderr || error.message));
//         else resolve();
//       },
//     );
//   });

//   const [wavBuffer] = await Promise.all([
//     readFile(outputPath),
//     unlink(inputPath).catch(() => {}),
//     unlink(outputPath).catch(() => {}),
//   ]);

//   return wavBuffer;
// }

// export async function POST(request: Request) {
//   const { userId, orgId } = await auth();

//   if (!userId || !orgId) {
//     return Response.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   // Check for active subscription before voice creation

//   try {
//     const customerState = await polar.customers.getStateExternal({
//       externalId: orgId,
//     });
//     const hasActiveSubscription =
//       (customerState.activeSubscriptions ?? []).length > 0;
//     if (!hasActiveSubscription) {
//       return Response.json(
//         { error: "SUBSCRIPTION_REQUIRED" },
//         {
//           status: 403,
//         },
//       );
//     }
//   } catch {
//     // Customer doesn't exist in Polar yet -> no subscription
//     return Response.json({ error: "SUBSCRIPTION_REQUIRED" }, { status: 403 });
//   }
//   // End of polar subscription check

//   const url = new URL(request.url);
//   const validation = createVoiceSchema.safeParse({
//     name: url.searchParams.get("name"),
//     category: url.searchParams.get("category"),
//     language: url.searchParams.get("language"),
//     description: url.searchParams.get("description"),
//   });

//   if (!validation.success) {
//     return Response.json(
//       { error: "Invalid input", issues: validation.error.issues },
//       { status: 400 },
//     );
//   }

//   const { name, category, language, description } = validation.data;
//   const fileBuffer = await request.arrayBuffer();

//   if (!fileBuffer.byteLength) {
//     return Response.json(
//       { error: "Please upload an audio file" },
//       { status: 400 },
//     );
//   }

//   if (fileBuffer.byteLength > MAX_UPLOAD_SIZE_BYTES) {
//     return Response.json(
//       { error: "Audio file exceeded the 20 MB size limit" },
//       { status: 413 },
//     );
//   }

//   const contentType = request.headers.get("content-type");
//   if (!contentType) {
//     return Response.json(
//       { error: "Missing Content-Type header" },
//       { status: 400 },
//     );
//   }

//   const normalizedContentType =
//     contentType.split(";")[0]?.trim() || "audio/wav";

//   let duration: number;
//   try {
//     const metadata = await parseBuffer(
//       new Uint8Array(fileBuffer),
//       { mimeType: normalizedContentType },
//       { duration: true },
//     );
//     duration = metadata.format.duration ?? 0;
//   } catch {
//     return Response.json(
//       { error: "File is not a valid audio file" },
//       { status: 422 },
//     );
//   }

//   if (duration < MIN_AUDIO_DURATION_SECONDS) {
//     return Response.json(
//       {
//         error: `Audio too short (${duration.toFixed(1)}s). Minimum duration is ${MIN_AUDIO_DURATION_SECONDS} seconds.`,
//       },
//       { status: 422 },
//     );
//   }

//   // Convert to WAV before storing
//   let wavBuffer: Buffer;
//   try {
//     wavBuffer = await convertToWav(Buffer.from(fileBuffer));
//   } catch {
//     return Response.json(
//       { error: "Failed to process audio file. Please try a different file." },
//       { status: 422 },
//     );
//   }

//   let createdVoiceId: string | null = null;
//   try {
//     const voice = await prisma.voice.create({
//       data: { name, variant: "CUSTOM", orgId, description, category, language },
//       select: { id: true },
//     });
//     createdVoiceId = voice.id;

//     const r2ObjectKey = `voices/org/${orgId}/${voice.id}.wav`;

//     await uploadAudio({
//       buffer: wavBuffer,
//       key: r2ObjectKey,
//       contentType: "audio/wav",
//     });

//     await prisma.voice.update({
//       where: { id: voice.id },
//       data: { r2ObjectKey },
//     });
//   } catch {
//     if (createdVoiceId) {
//       await prisma.voice
//         .delete({ where: { id: createdVoiceId } })
//         .catch(() => {});
//     }
//     return Response.json(
//       { error: "Failed to create voice. Please retry." },
//       { status: 500 },
//     );
//   }

//   // Ingest usage event to Polar (fire-and-forget, don't block response)
//   polar.events
//     .ingest({
//       events: [
//         {
//           name: "voice_creation",
//           externalCustomerId: orgId,
//           metadata: {},
//           timestamp: new Date(),
//         },
//       ],
//     })
//     .catch(() => {
//       // Silently fail - don't break the use experience for metering errors
//     });

//   return Response.json(
//     { name, message: "Voice created successfully" },
//     { status: 201 },
//   );
// }

import { execFile } from "child_process";
import { tmpdir } from "os";
import { join } from "path";
import { writeFile, readFile, unlink } from "fs/promises";
import { randomUUID } from "crypto";

import { auth } from "@clerk/nextjs/server";
import { parseBuffer } from "music-metadata";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { uploadAudio } from "@/lib/r2";
import { VOICE_CATEGORIES } from "@/features/voices/data/voice-categories";
import type { VoiceCategory } from "@/generated/prisma/client";
import { polar } from "@/lib/polar";

const createVoiceSchema = z.object({
  name: z.string().min(1, "Voice name is required"),
  category: z.enum(VOICE_CATEGORIES as [VoiceCategory, ...VoiceCategory[]]),
  language: z.string().min(1, "Language is required"),
  description: z.string().nullish(),
});

const MAX_UPLOAD_SIZE_BYTES = 20 * 1024 * 1024;
const MIN_AUDIO_DURATION_SECONDS = 10;

async function convertToWav(inputBuffer: Buffer): Promise<Buffer> {
  const ffmpegPath = process.env.FFMPEG_PATH;

  // Temporary debug - remove after fixing
  const { existsSync } = await import("fs");
  const pathsToCheck = [
    "/var/task/node_modules/ffmpeg-static/ffmpeg",
    "/var/task/node_modules/.bin/ffmpeg",
    "/tmp/ffmpeg",
    ffmpegPath ?? "no-env-set",
  ];
  console.log(
    "Checking ffmpeg paths:",
    pathsToCheck.map((p) => `${p}: ${existsSync(p)}`).join(" | "),
  );

  if (!ffmpegPath) throw new Error("FFMPEG_PATH not configured");

  const id = randomUUID();
  const inputPath = join(tmpdir(), `voice-in-${id}`);
  const outputPath = join(tmpdir(), `voice-out-${id}.wav`);

  await writeFile(inputPath, inputBuffer);

  await new Promise<void>((resolve, reject) => {
    execFile(
      ffmpegPath,
      [
        "-y",
        "-i",
        inputPath,
        "-vn",
        "-ac",
        "1",
        "-ar",
        "44100",
        "-acodec",
        "pcm_s16le",
        "-f",
        "wav",
        outputPath,
      ],
      (error, _stdout, stderr) => {
        if (error) reject(new Error(stderr || error.message));
        else resolve();
      },
    );
  });

  const [wavBuffer] = await Promise.all([
    readFile(outputPath),
    unlink(inputPath).catch(() => {}),
    unlink(outputPath).catch(() => {}),
  ]);

  return wavBuffer;
}

export async function POST(request: Request) {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const customerState = await polar.customers.getStateExternal({
      externalId: orgId,
    });
    const hasActiveSubscription =
      (customerState.activeSubscriptions ?? []).length > 0;
    if (!hasActiveSubscription) {
      return Response.json({ error: "SUBSCRIPTION_REQUIRED" }, { status: 403 });
    }
  } catch {
    return Response.json({ error: "SUBSCRIPTION_REQUIRED" }, { status: 403 });
  }

  const url = new URL(request.url);
  const validation = createVoiceSchema.safeParse({
    name: url.searchParams.get("name"),
    category: url.searchParams.get("category"),
    language: url.searchParams.get("language"),
    description: url.searchParams.get("description"),
  });

  if (!validation.success) {
    return Response.json(
      { error: "Invalid input", issues: validation.error.issues },
      { status: 400 },
    );
  }

  const { name, category, language, description } = validation.data;
  const fileBuffer = await request.arrayBuffer();

  if (!fileBuffer.byteLength) {
    return Response.json(
      { error: "Please upload an audio file" },
      { status: 400 },
    );
  }

  if (fileBuffer.byteLength > MAX_UPLOAD_SIZE_BYTES) {
    return Response.json(
      { error: "Audio file exceeded the 20 MB size limit" },
      { status: 413 },
    );
  }

  const contentType = request.headers.get("content-type");
  if (!contentType) {
    return Response.json(
      { error: "Missing Content-Type header" },
      { status: 400 },
    );
  }

  const normalizedContentType = (() => {
    const raw = contentType.split(";")[0]?.trim() || "audio/wav";
    if (raw === "video/mp4" || raw === "audio/mp4") return "audio/mp4";
    return raw;
  })();

  let duration: number;
  try {
    const metadata = await parseBuffer(
      new Uint8Array(fileBuffer),
      { mimeType: normalizedContentType },
      { duration: true },
    );
    duration = metadata.format.duration ?? 0;
  } catch {
    return Response.json(
      { error: "File is not a valid audio file" },
      { status: 422 },
    );
  }

  if (duration < MIN_AUDIO_DURATION_SECONDS) {
    return Response.json(
      {
        error: `Audio too short (${duration.toFixed(1)}s). Minimum duration is ${MIN_AUDIO_DURATION_SECONDS} seconds.`,
      },
      { status: 422 },
    );
  }

  let wavBuffer: Buffer;
  try {
    wavBuffer = await convertToWav(Buffer.from(fileBuffer));
  } catch (err) {
    console.error("FFmpeg conversion error:", err); // <-- ADD THIS
    return Response.json(
      {
        error:
          err instanceof Error ? err.message : "Failed to process audio file.",
      },
      { status: 422 },
    );
  }

  let createdVoiceId: string | null = null;
  try {
    const voice = await prisma.voice.create({
      data: { name, variant: "CUSTOM", orgId, description, category, language },
      select: { id: true },
    });
    createdVoiceId = voice.id;

    const r2ObjectKey = `voices/org/${orgId}/${voice.id}.wav`;

    await uploadAudio({
      buffer: wavBuffer,
      key: r2ObjectKey,
      contentType: "audio/wav",
    });

    await prisma.voice.update({
      where: { id: voice.id },
      data: { r2ObjectKey },
    });
  } catch {
    if (createdVoiceId) {
      await prisma.voice
        .delete({ where: { id: createdVoiceId } })
        .catch(() => {});
    }
    return Response.json(
      { error: "Failed to create voice. Please retry." },
      { status: 500 },
    );
  }

  polar.events
    .ingest({
      events: [
        {
          name: "voice_creation",
          externalCustomerId: orgId,
          metadata: {},
          timestamp: new Date(),
        },
      ],
    })
    .catch(() => {});

  return Response.json(
    { name, message: "Voice created successfully" },
    { status: 201 },
  );
}
