# trpc-solid

Minimal example of using [tRPC](https://trpc.io) with [Solid Start](https://start.solidjs.com/getting-started/what-is-solidstart) using the [fetch adapter](https://trpc.io/docs/fetch) & [Solid Query](https://tanstack.com/query/latest/docs/solid/overview)

## Using the fetch adapter

```ts
import { type APIEvent } from "solid-start";
import {
  fetchRequestHandler,
  type FetchCreateContextFnOptions,
} from "@trpc/server/adapters/fetch";

const handler = (event: APIEvent) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: event.request,
    router: appRouter,
    createContext,
  });
export { handler as GET, handler as POST };
```