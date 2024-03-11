import { VkUIProvider } from "./VkUIProvider";
import { QueryClientProvider } from "./QueryClientProvider";
import { ActivePanelProvider } from "./ActivePanelProvider";
import { IsAlertOpenedProvider } from "./IsAlertOpenedProvider";
import { IsModalOpenedProvider } from "./IsModalOpenedProvider";
import { FiltersProvider } from "./FiltersProvider";

type TProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: TProvidersProps) {
  return (
    <VkUIProvider>
      <QueryClientProvider>
        <ActivePanelProvider>
          <IsAlertOpenedProvider>
            <IsModalOpenedProvider>
              <FiltersProvider>{children}</FiltersProvider>
            </IsModalOpenedProvider>
          </IsAlertOpenedProvider>
        </ActivePanelProvider>
      </QueryClientProvider>
    </VkUIProvider>
  );
}
