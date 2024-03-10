import { VkUIProvider } from "./VkUIProvider";
import { QueryClientProvider } from "./QueryClientProvider";
import { ActivePanelProvider } from "./ActivePanelProvider";

type TProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: TProvidersProps) {
  return (
    <VkUIProvider>
      <QueryClientProvider>
        <ActivePanelProvider>{children}</ActivePanelProvider>
      </QueryClientProvider>
    </VkUIProvider>
  );
}
