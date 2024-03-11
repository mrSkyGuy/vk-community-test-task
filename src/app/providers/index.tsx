import { VkUIProvider } from "./VkUIProvider";
import { QueryClientProvider } from "./QueryClientProvider";
import { ActivePanelProvider } from "./ActivePanelProvider";
import { IsAlertOpenedProvider } from "./IsAlertOpenedProvider";
import { IsModalOpenedProvider } from "./IsModalOpenedProvider";

type TProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: TProvidersProps) {
  return (
    <VkUIProvider>
      <QueryClientProvider>
        <ActivePanelProvider>
          <IsAlertOpenedProvider>
            <IsModalOpenedProvider>{children}</IsModalOpenedProvider>
          </IsAlertOpenedProvider>
        </ActivePanelProvider>
      </QueryClientProvider>
    </VkUIProvider>
  );
}
