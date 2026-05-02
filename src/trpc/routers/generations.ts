// import { z } from "zod";
// import { TRPCError } from "@trpc/server";
// import { chatterbox } from "@/lib/chatterbox-client";
// import { prisma } from "@/lib/db";
// import { uploadAudio } from "@/lib/r2";
// import { TEXT_MAX_LENGTH } from "@/features/text-to-speech/data/constants";
// import { createTRPCRouter, orgProcedure } from "../init";

// export const generationsRouter = createTRPCRouter({
//   getById: orgProcedure
//     .input(z.object({ id: z.string() }))
//     .query(async ({ input, ctx }) => {
//       const generation = await prisma.generation.findUnique({
//         where: {
//           id: input.id,
//           orgId: ctx.orgId,
//         },
//         omit: {
//           orgId: true,
//           r2ObjectKey: true,
//         },
//       });

//       if (!generation) {
//         throw new TRPCError({ code: "NOT_FOUND" });
//       }

//       return {
//         ...generation,
//         audioUrl: `/api/audio/${generation.id}`,
//       };
//     }),

//   getAll: orgProcedure.query(async ({ ctx }) => {
//     const generations = await prisma.generation.findMany({
//       where: { orgId: ctx.orgId },
//       orderBy: { createdAt: "desc" },
//       omit: {
//         orgId: true,
//         r2ObjectKey: true,
//       },
//     });
//     return generations;
//   }),

//   create: orgProcedure
//     .input(
//       z.object({
//         text: z.string().min(1).max(TEXT_MAX_LENGTH),
//         voiceId: z.string().min(1),
//         temperature: z.number().min(0).max(2).default(0.8),
//         topP: z.number().min(0).max(1).default(0.95),
//         topK: z.number().min(1).max(10000).default(1000),
//         repetitionPenality: z.number().min(1).max(2).default(1.2),
//       }),
//     )
//     .mutation(async ({ input, ctx }) => {
//       const voice = await prisma.voice.findUnique({
//         where: {
//           id: input.voiceId,
//           OR: [{ variant: "SYSTEM" }, { variant: "CUSTOM", orgId: ctx.orgId }],
//         },
//         select: {
//           id: true,
//           name: true,
//           r2ObjectKey: true,
//         },
//       });
//       if (!voice) {
//         throw new TRPCError({
//           code: "NOT_FOUND",
//           message: "Voice not found",
//         });
//       }
//       if (!voice.r2ObjectKey) {
//         throw new TRPCError({
//           code: "PRECONDITION_FAILED",
//           message: "Voice audio not available",
//         });
//       }
//       const { data, error } = await chatterbox.POST("/generate", {
//         body: {
//           prompt: input.text,
//           voice_key: voice.r2ObjectKey,
//           temperature: input.temperature,
//           top_p: input.topP,
//           top_k: input.topK,
//           repetition_penalty: input.repetitionPenality,
//           norm_loudness: true,
//         },
//         parseAs: "arrayBuffer",
//       });

//       if (error) {
//         throw new TRPCError({
//           code: "INTERNAL_SERVER_ERROR",
//           message: "Failed to generate audio",
//         });
//       }
//       if (!(data instanceof ArrayBuffer)) {
//         throw new TRPCError({
//           code: "INTERNAL_SERVER_ERROR",
//           message: "Invalid audio response",
//         });
//       }
//       const buffer = Buffer.from(data);
//       let generationId: string | null = null;
//       let r2ObjectKey: string | null = null;

//       try {
//         const generation = await prisma.generation.create({
//           data: {
//             orgId: ctx.orgId,
//             text: input.text,
//             voiceName: voice.name,
//             voiceId: voice.id,
//             temperature: input.temperature,
//             topP: input.topP,
//             topK: input.topK,
//             repetitionPenalty: input.repetitionPenality,
//           },
//           select: {
//             id: true,
//           },
//         });
//         generationId = generation.id;
//         r2ObjectKey = `generations/orgs/${ctx.orgId}/${generation.id}`;

//         await uploadAudio({ buffer, key: r2ObjectKey });

//         await prisma.generation.update({
//           where: {
//             id: generation.id,
//           },
//           data: {
//             r2ObjectKey,
//           },
//         });
//       } catch {
//         if (generationId) {
//           await prisma.generation
//             .delete({
//               where: {
//                 id: generationId,
//               },
//             })
//             .catch(() => {});
//         }
//         throw new TRPCError({
//           code: "INTERNAL_SERVER_ERROR",
//           message: "Failed to store generated audio",
//         });
//       }
//       if (!generationId || !r2ObjectKey) {
//         throw new TRPCError({
//           code: "INTERNAL_SERVER_ERROR",
//           message: "Failed to store generated audio",
//         });
//       }
//       return {
//         id: generationId,
//       };
//     }),
// });
import * as Sentry from "@sentry/nextjs";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { chatterbox } from "@/lib/chatterbox-client";
import { prisma } from "@/lib/db";
import { uploadAudio } from "@/lib/r2";
import { TEXT_MAX_LENGTH } from "@/features/text-to-speech/data/constants";
import { createTRPCRouter, orgProcedure } from "../init";
import { polar } from "@/lib/polar";

export const generationsRouter = createTRPCRouter({
  getById: orgProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      console.log("[generations.getById] id:", input.id, "org:", ctx.orgId);

      const generation = await prisma.generation.findUnique({
        where: { id: input.id, orgId: ctx.orgId },
        omit: { orgId: true, r2ObjectKey: true },
      });

      if (!generation) {
        console.warn("[generations.getById] NOT FOUND:", input.id);
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      console.log("[generations.getById] found:", generation.id);
      return { ...generation, audioUrl: `/api/audio/${generation.id}` };
    }),

  getAll: orgProcedure.query(async ({ ctx }) => {
    console.log("[generations.getAll] org:", ctx.orgId);
    const generations = await prisma.generation.findMany({
      where: { orgId: ctx.orgId },
      orderBy: { createdAt: "desc" },
      omit: { orgId: true, r2ObjectKey: true },
    });
    console.log("[generations.getAll] count:", generations.length);
    return generations;
  }),

  create: orgProcedure
    .input(
      z.object({
        text: z.string().min(1).max(TEXT_MAX_LENGTH),
        voiceId: z.string().min(1),
        temperature: z.number().min(0).max(2).default(0.8),
        topP: z.number().min(0).max(1).default(0.95),
        topK: z.number().min(1).max(10000).default(1000),
        repetitionPenality: z.number().min(1).max(2).default(1.2),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      // Check for active subscription before generation
      try {
        const customerState = await polar.customers.getStateExternal({
          externalId: ctx.orgId,
        });
        const hasActiveSubscription =
          (customerState.activeSubscriptions ?? []).length > 0;
        if (!hasActiveSubscription) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "SUBSCIPRTION_REQUIRED",
          });
        }
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        //Customer doesn't exist in Polar yet -> no subscription
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "SUBSCRIPTION_REQUIRED",
        });
      }
      // End of check for subscriptions before generating it

      console.log("[generations.create] START", {
        orgId: ctx.orgId,
        voiceId: input.voiceId,
        textLen: input.text.length,
        temperature: input.temperature,
      });

      // 1. Voice lookup
      const voice = await prisma.voice.findUnique({
        where: {
          id: input.voiceId,
          OR: [{ variant: "SYSTEM" }, { variant: "CUSTOM", orgId: ctx.orgId }],
        },
        select: { id: true, name: true, r2ObjectKey: true },
      });

      console.log(
        "[generations.create] voice lookup:",
        voice ? `found: ${voice.name}` : "NOT FOUND",
        "| r2Key:",
        voice?.r2ObjectKey ?? "MISSING",
      );

      if (!voice) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Voice not found" });
      }
      if (!voice.r2ObjectKey) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Voice audio not available",
        });
      }

      // 2. Call Chatterbox
      console.log(
        "[generations.create] calling Chatterbox with voice_key:",
        voice.r2ObjectKey,
      );
      const { data, error } = await chatterbox.POST("/generate", {
        body: {
          prompt: input.text,
          voice_key: voice.r2ObjectKey,
          temperature: input.temperature,
          top_p: input.topP,
          top_k: input.topK,
          repetition_penalty: input.repetitionPenality,
          norm_loudness: true,
        },
        parseAs: "arrayBuffer",
      });

      Sentry.logger.info("Generation started", {
        orgId: ctx.orgId,
        voiceId: input.voiceId,
        textLength: input.text.length,
      });

      console.log("[generations.create] Chatterbox response:", {
        hasData: !!data,
        isArrayBuffer: data instanceof ArrayBuffer,
        byteLength: data instanceof ArrayBuffer ? data.byteLength : "N/A",
        error,
      });

      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to generate audio",
        });
      }
      if (!(data instanceof ArrayBuffer)) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Invalid audio response",
        });
      }

      const buffer = Buffer.from(data);
      console.log(
        "[generations.create] buffer size:",
        buffer.byteLength,
        "bytes",
      );

      // 3. DB + R2 storage
      let generationId: string | null = null;
      let r2ObjectKey: string | null = null;

      try {
        const generation = await prisma.generation.create({
          data: {
            orgId: ctx.orgId,
            text: input.text,
            voiceName: voice.name,
            voiceId: voice.id,
            temperature: input.temperature,
            topP: input.topP,
            topK: input.topK,
            repetitionPenalty: input.repetitionPenality,
          },
          select: { id: true },
        });

        generationId = generation.id;
        r2ObjectKey = `generations/orgs/${ctx.orgId}/${generation.id}`;
        console.log(
          "[generations.create] DB record created:",
          generationId,
          "| r2Key:",
          r2ObjectKey,
        );

        await uploadAudio({ buffer, key: r2ObjectKey });
        console.log("[generations.create] R2 upload done");

        await prisma.generation.update({
          where: { id: generation.id },
          data: { r2ObjectKey },
        });
        console.log("[generations.create] DB updated with r2Key");

        Sentry.logger.info("Audio generated", {
          orgId: ctx.orgId,
          generationId: generation.id,
        });
      } catch (err) {
        console.error("[generations.create] STORAGE FAILED:", err);
        if (generationId) {
          await prisma.generation
            .delete({ where: { id: generationId } })
            .catch((cleanupErr) =>
              console.error("[generations.create] cleanup failed:", cleanupErr),
            );
        }
        Sentry.logger.error("Generation failed", {
          orgId: ctx.orgId,
          voiceId: input.voiceId,
        });
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to store generated audio",
        });
      }

      if (!generationId || !r2ObjectKey) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to store generated audio",
        });
      }

      // Ingest usage event to Polar (fire-and-forget, don't block response)
      polar.events
        .ingest({
          events: [
            {
              name: "tts_generation",
              externalCustomerId: ctx.orgId,
              metadata: { characters: input.text.length },
              timestamp: new Date(),
            },
          ],
        })
        .catch(() => {
          // Sliently fail - don't break the user experience for metering errors
        });

      console.log("[generations.create] DONE, returning id:", generationId);
      return { id: generationId };
    }),
});
