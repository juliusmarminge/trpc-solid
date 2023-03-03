import { QueryClient } from "@tanstack/solid-query";
import { type AppRouter } from "~/routes/api/trpc/[trpc]";
import { createTRPCSolidStart } from "solid-trpc";
import { httpBatchLink } from "@trpc/client";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const trpc = createTRPCSolidStart<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            return {
              Authorization: Math.random().toFixed(12),
            };
          },
        }),
      ],
    };
  },
});

export const queryClient = new QueryClient();
