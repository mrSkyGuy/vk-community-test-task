import styles from "./index.module.css";

type TAvatarProps = {
  color: string | undefined;
};

export function Avatar({ color }: TAvatarProps) {
  return <div className={styles.avatar} style={{ backgroundColor: color }} />;
}
