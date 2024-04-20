import { QueryCache, QueryClient } from "@tanstack/react-query";
// import { handleError } from "./toastify";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // onError: handleError,
  }),
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
