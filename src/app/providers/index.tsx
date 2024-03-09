import { VkUIProvider } from "./VkUIProvider";
import { QueryClientProvider } from "./QueryClientProvider";

type TProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: TProvidersProps) {
  return (
    <VkUIProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </VkUIProvider>
  );
}
