// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// import { createTRPCContext } from "../../../../trpc/init";
// import { appRouter } from "../../../../trpc/routers/_app";
// const handler = (req: Request) =>
//   fetchRequestHandler({
//     endpoint: "/api/trpc",
//     req,
//     router: appRouter,
//     createContext: createTRPCContext,
//   });
// export { handler as GET, handler as POST };

// api/trpc/[trpc]/route.ts
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "../../../../trpc/init";
import { appRouter } from "../../../../trpc/routers/_app";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
    onError({ path, error }) {
      console.error(`[tRPC ERROR] on ${path ?? "unknown"}:`, {
        code: error.code,
        message: error.message,
        cause: error.cause,
      });
    },
  });

export { handler as GET, handler as POST };
