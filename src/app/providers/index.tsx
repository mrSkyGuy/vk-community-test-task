import { VkUIProvider } from "./VkUIProvider";
import { QueryClientProvider } from "./QueryClientProvider";
import { ActivePanelProvider } from "./ActivePanelProvider";
import { IsAlertOpenedProvider } from "./IsAlertOpenedProvider";

type TProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: TProvidersProps) {
  return (
    <VkUIProvider>
      <QueryClientProvider>
        <ActivePanelProvider>
          <IsAlertOpenedProvider>{children}</IsAlertOpenedProvider>
        </ActivePanelProvider>
      </QueryClientProvider>
    </VkUIProvider>
  );
}
