import { QueryClientProvider as RQQueryClientProvider } from "react-query";
import { queryClient } from "../../shared/lib/react-query";

type TQueryClientProviderProps = {
  children: React.ReactNode;
};

export function QueryClientProvider({ children }: TQueryClientProviderProps) {
  return <RQQueryClientProvider client={queryClient}>{children}</RQQueryClientProvider>;
}
