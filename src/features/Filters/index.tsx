import { FormItem, RadioGroup, Radio, Title, ModalCard, ChipsSelect } from "@vkontakte/vkui";
import { SyntheticEvent, useContext } from "react";
import { IsModalOpenedContext } from "../../shared/context/IsModalOpenedContext";
import { FiltersContext } from "../../shared/context/FiltersContext";
import styles from "./index.module.css";

type TFilterProps = {
  availableColors: string[];
  id: string;
};
type TPrivacyType = "all" | "public" | "private";

export function Filters({ availableColors, id }: TFilterProps) {
  const { filters, setFilters } = useContext(FiltersContext)!;
  const { privacyType, choseAvatarColors, friends } = filters;
  const { setModal } = useContext(IsModalOpenedContext)!;

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }

  function onRadioChange(type: TPrivacyType) {
    setFilters((prev) => ({
      ...prev,
      privacyType: type
    }));
  }

  function onColorChoose(colors: { value: string; label: string }[]) {
    setFilters((prev) => {
      return {
        ...prev,
        choseAvatarColors: colors.map((color) => color.value)
      };
    });
  }

  function onFriendsChange(type: null | boolean) {
    setFilters((prev) => ({
      ...prev,
      friends: type
    }));
  }

  return (
    <ModalCard
      header={
        <Title className={styles.centering} level="2">
          Фильтры
        </Title>
      }
      id={id}
      onClose={() => setModal(null)}
      dismissLabel="close"
      dismissButtonMode="inside"
    >
      <form onSubmit={onSubmit}>
        <FormItem top="Тип приватности" htmlFor="privacy-type--radio-group">
          <RadioGroup id="privacy-type--radio-group">
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

        <FormItem top="Цвета аватарок" htmlFor="chose-avatar-colors--chips-select">
          <ChipsSelect
            id="chose-avatar-colors--chips-select"
            placeholder="Все"
            value={[...choseAvatarColors].map((value) => ({
              value,
              label: value
            }))}
            options={[...availableColors, "without"].map((value) => ({
              value,
              label: value
            }))}
            onChange={onColorChoose}
          />
        </FormItem>

        <FormItem top="Есть друзья">
          <RadioGroup>
            <Radio
              name="friends"
              value="all"
              checked={friends === null}
              onChange={() => onFriendsChange(null)}
            >
              Все
            </Radio>
            <Radio
              name="friends"
              value="true"
              checked={friends === true}
              onChange={() => onFriendsChange(true)}
            >
              Да
            </Radio>
            <Radio
              name="friends"
              value="false"
              checked={friends === false}
              onChange={() => onFriendsChange(false)}
            >
              Нет
            </Radio>
          </RadioGroup>
        </FormItem>
      </form>
    </ModalCard>
  );
}
