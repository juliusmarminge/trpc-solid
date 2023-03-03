import { initTRPC } from "@trpc/server";
import {
  fetchRequestHandler,
  type FetchCreateContextFnOptions,
} from "@trpc/server/adapters/fetch";
import { type APIEvent } from "solid-start";

export const createContext = async (opts: FetchCreateContextFnOptions) => {
  const authToken = opts.req.headers.get("authorization");
  return {
    authToken,
  };
};

const t = initTRPC.context<typeof createContext>().create();

const appRouter = t.router({
  me: t.procedure.query(({ ctx }) => ctx.authToken),
  greeting: t.procedure.query(() => "Hello World!"),
});

export type AppRouter = typeof appRouter;

/**
 * Actual handler
 */
const handler = (event: APIEvent) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: event.request,
    router: appRouter,
    createContext,
  });
export { handler as GET, handler as POST };
