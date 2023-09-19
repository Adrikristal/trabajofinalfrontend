import { MouseEventHandler } from "react";
import styles from "../../styles/components/button-reserve.module.scss";

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: Props) => {
  const { text, onClick } = props;
  return (
    <button type="button" className={styles.reserve} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
