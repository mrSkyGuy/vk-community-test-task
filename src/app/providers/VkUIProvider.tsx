import { AppRoot, SplitLayout } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

type TVkUIProviderProps = {
  children: React.ReactNode;
};

export function VkUIProvider({ children }: TVkUIProviderProps) {
  return (
    <AppRoot mode="full">
      <SplitLayout>{children}</SplitLayout>
    </AppRoot>
  );
}
