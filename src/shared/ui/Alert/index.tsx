import { useContext } from "react";
import { Alert as VKAlert } from "@vkontakte/vkui";
import { IsAlertOpenedContext } from "../../context/IsAlertOpenedContext";

type TAlertProps = {
  onSubmit: () => void;
};

export function Alert({ onSubmit }: TAlertProps) {
  const { setAlert } = useContext(IsAlertOpenedContext)!;
  return (
    <VKAlert
      actions={[
        {
          title: "Да, я уверен, бро, не волнуйся за меня",
          mode: "default",
          action: onSubmit
        },
        {
          title: "Спасибо, что предупредил! Ни шагу туда",
          mode: "cancel"
        }
      ]}
      onClose={() => setAlert(null)}
      actionsLayout="vertical"
      header="Остановись, ты же видишь это закрытая группа!!1!"
      text="Ты уверен, что тебе нужно посмотреть, что там? Помни, любопытной Варваре на базаре нос оторвали"
      dismissButtonMode="inside"
    />
  );
}
