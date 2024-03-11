import { FormItem, RadioGroup, Radio, Checkbox, Title, ModalCard } from "@vkontakte/vkui";
import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { isModalOpenedContext } from "../../shared/context/IsModalOpenedContext";

type TFilterProps = {
  availableColors: string[];
  id: string;
};
type TPrivacyType = "all" | "public" | "private";

export function Filters({ availableColors, id }: TFilterProps) {
  const [privacyType, setPrivacyType] = useState<TPrivacyType>("all");
  const [choseAvatarColors, setChoseAvatarColors] = useState<string[]>([]);
  const [friends, setFriends] = useState<boolean | null>(null);
  const { setModal } = useContext(isModalOpenedContext)!;

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }

  function onRadioChange(type: TPrivacyType) {
    setPrivacyType(type);
  }

  function onColorChoose(e: ChangeEvent<HTMLInputElement>) {
    const currentColor = e.currentTarget.value;

    setChoseAvatarColors((prev) => {
      if (prev.includes(currentColor)) {
        return [...prev].filter((item) => item !== currentColor);
      } else {
        const v = [...prev];
        v.push(currentColor);
        return v;
      }
    });
  }

  return (
    <ModalCard
      header={
        <Title style={{ textAlign: "center" }} level="2">
          Фильтры
        </Title>
      }
      id={id}
      onClose={() => setModal(null)}
      dismissLabel="close"
      dismissButtonMode="inside"
    >
      <form onSubmit={onSubmit}>
        <FormItem top="Тип приватности">
          <RadioGroup>
            <Radio
              name="privacyType"
              value="all"
              checked={privacyType === "all"}
              onChange={() => onRadioChange("all")}
            >
              Все
            </Radio>
            <Radio
              name="privacyType"
              value="public"
              checked={privacyType === "public"}
              onChange={() => onRadioChange("public")}
            >
              Открытые
            </Radio>
            <Radio
              name="privacyType"
              value="private"
              checked={privacyType === "private"}
              onChange={() => onRadioChange("private")}
            >
              Закрытые
            </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem top="Цвет аватарки">
          <Checkbox checked={choseAvatarColors.length === 0} disabled>
            Любой
          </Checkbox>
          <Checkbox
            checked={choseAvatarColors.includes("null")}
            value="null"
            onChange={onColorChoose}
          >
            Без аватарки
          </Checkbox>
          {Array.from(availableColors).map((color, index) => {
            if (!color) return;

            return (
              <Checkbox
                key={index}
                value={color}
                checked={choseAvatarColors.includes(color)}
                onChange={onColorChoose}
              >
                {color}
              </Checkbox>
            );
          })}
        </FormItem>
        <FormItem top="Есть друзья">
          <RadioGroup>
            <Radio
              name="friends"
              value="all"
              checked={friends === null}
              onChange={() => setFriends(null)}
            >
              Все
            </Radio>
            <Radio
              name="friends"
              value="true"
              checked={friends === true}
              onChange={() => setFriends(true)}
            >
              Да
            </Radio>
            <Radio
              name="friends"
              value="false"
              checked={friends === false}
              onChange={() => setFriends(false)}
            >
              Нет
            </Radio>
          </RadioGroup>
        </FormItem>
      </form>
    </ModalCard>
  );
}
