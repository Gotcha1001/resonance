"use client";

import { VoicesList } from "@/app/(dashboard)/voices/components/voices-list";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";
import { voicesSearchParams } from "../lib/params";
import { VoicesToolbar } from "@/app/(dashboard)/voices/components/voices-toolbar";

function VoicesContent() {
  const trpc = useTRPC();
  const [query] = useQueryState("query", voicesSearchParams.query);
  const { data } = useSuspenseQuery(trpc.voices.getAll.queryOptions({ query }));

  return (
    <>
      <VoicesList title="Team Voices" voices={data.custom} />
      <VoicesList title="Build-In Voices" voices={data.system} />
    </>
  );
}

export function VoicesView() {
  return (
    <div className="flex-1 space-y-10 overflow-auto p-3 lg:p-6">
      <VoicesToolbar />
      <VoicesContent />
    </div>
  );
}
