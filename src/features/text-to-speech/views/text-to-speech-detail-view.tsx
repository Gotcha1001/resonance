// "use client";
// import { SettingsPanel } from "../components/settings-panel";
// import { TextInputPanel } from "../components/text-input-panel";
// import { VoicePreviewPlaceholder } from "../components/voice-preview-placeholder";
// import {
//   TextToSpeechForm,
//   type TTSFormValues,
// } from "../components/text-to-speech-form";
// import { useSuspenseQueries } from "@tanstack/react-query";
// import { useTRPC } from "@/trpc/client";
// import { TTSVoicesProvider } from "../contexts/tts-voices-context";
// import { VoicePreviewPanel } from "../components/voice-preview-panel";
// import { VoicePreviewMobile } from "../components/voice-preview-mobile";

// export function TextToSpeechDetailView({
//   generationId,
// }: {
//   generationId: string;
// }) {
//   const trpc = useTRPC();
//   const [generationQuery, voicesQuery] = useSuspenseQueries({
//     queries: [
//       trpc.generations.getById.queryOptions({ id: generationId }),
//       trpc.voices.getAll.queryOptions(),
//     ],
//   });
//   const data = generationQuery.data;
//   const { custom: customVoices, system: systemVoices } = voicesQuery.data;
//   const allVoices = [...customVoices, ...systemVoices];
//   const fallbackVoiceId = allVoices[0]?.id ?? "";

//   //Requested voice may no longer exist (deleted) fall back to first available
//   const resolvedVoiceId =
//     data?.voiceId && allVoices.some((v) => v.id === data.voiceId)
//       ? data.voiceId
//       : fallbackVoiceId;

//   const defaultValues: TTSFormValues = {
//     text: data.text,
//     voiceId: resolvedVoiceId,
//     temperature: data.temperature,
//     topP: data.topP,
//     topK: data.topK,
//     repetitionPenality: data.repetitionPenalty,
//   };

//   const generationVoice = {
//     id: data.voiceId ?? undefined,
//     name: data.voiceName,
//   };
//   return (
//     <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
//       <TextToSpeechForm key={generationId} defaultValues={defaultValues}>
//         <div className="flex min-h-0 flex-1 overflow-hidden">
//           <div className="flex min-h-0 flex-1 flex-col">
//             <TextInputPanel />
//             <VoicePreviewMobile
//               audioUrl={data.audioUrl}
//               voice={generationVoice}
//               text={data.text}
//             />
//             <VoicePreviewPanel
//               audioUrl={data.audioUrl}
//               voice={generationVoice}
//               text={data.text}
//             />
//           </div>
//           <SettingsPanel />
//         </div>
//       </TextToSpeechForm>
//     </TTSVoicesProvider>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SettingsPanel } from "../components/settings-panel";
import { TextInputPanel } from "../components/text-input-panel";
import {
  TextToSpeechForm,
  type TTSFormValues,
} from "../components/text-to-speech-form";
import {
  useSuspenseQueries,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { TTSVoicesProvider } from "../contexts/tts-voices-context";
import { VoicePreviewPanel } from "../components/voice-preview-panel";
import { VoicePreviewMobile } from "../components/voice-preview-mobile";
import { Button } from "@/components/ui/button";

export function TextToSpeechDetailView({
  generationId,
}: {
  generationId: string;
}) {
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showWarning, setShowWarning] = useState(false);

  const [generationQuery, voicesQuery] = useSuspenseQueries({
    queries: [
      trpc.generations.getById.queryOptions({ id: generationId }),
      trpc.voices.getAll.queryOptions(),
    ],
  });

  const deleteMutation = useMutation(
    trpc.generations.delete.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: trpc.generations.getAll.queryKey(),
        });
        router.push("/text-to-speech");
      },
    }),
  );

  // Warn on browser close/refresh
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const handleLeaveAndDelete = () => {
    deleteMutation.mutate({ id: generationId });
  };

  const data = generationQuery.data;
  const { custom: customVoices, system: systemVoices } = voicesQuery.data;
  const allVoices = [...customVoices, ...systemVoices];
  const fallbackVoiceId = allVoices[0]?.id ?? "";

  const resolvedVoiceId =
    data?.voiceId && allVoices.some((v) => v.id === data.voiceId)
      ? data.voiceId
      : fallbackVoiceId;

  const defaultValues: TTSFormValues = {
    text: data.text,
    voiceId: resolvedVoiceId,
    temperature: data.temperature,
    topP: data.topP,
    topK: data.topK,
    repetitionPenality: data.repetitionPenalty,
  };

  const generationVoice = {
    id: data.voiceId ?? undefined,
    name: data.voiceName,
  };

  return (
    <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
      {/* Warning Banner */}
      <div className="flex items-center justify-between gap-4 border-b bg-amber-500/10 px-4 py-2.5 text-sm">
        <p className="text-amber-600 dark:text-amber-400">
          ⚠️ Download your audio before leaving — this generation will be
          permanently deleted when you navigate away.
        </p>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setShowWarning(true)}
        >
          Leave & Delete
        </Button>
      </div>

      {/* Confirm Dialog */}
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-background border rounded-2xl p-6 max-w-sm w-full mx-4 flex flex-col gap-4 shadow-xl">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-base font-semibold">
                Delete this generation?
              </h2>
              <p className="text-sm text-muted-foreground">
                This audio will be permanently deleted from storage. Make sure
                you&apos;ve downloaded it first.
              </p>
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowWarning(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleLeaveAndDelete}
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending ? "Deleting..." : "Delete & Leave"}
              </Button>
            </div>
          </div>
        </div>
      )}

      <TextToSpeechForm key={generationId} defaultValues={defaultValues}>
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col">
            <TextInputPanel />
            <VoicePreviewMobile
              audioUrl={data.audioUrl}
              voice={generationVoice}
              text={data.text}
            />
            <VoicePreviewPanel
              audioUrl={data.audioUrl}
              voice={generationVoice}
              text={data.text}
            />
          </div>
          <SettingsPanel />
        </div>
      </TextToSpeechForm>
    </TTSVoicesProvider>
  );
}
