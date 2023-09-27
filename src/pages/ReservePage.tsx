import { ReactElement } from "react";
import styles from "../styles/pages/reserve-page.module.scss";

function sendReserve(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log("Movie reserved");
}

const ReservePage = () => {
  return (
    <div className={styles["reservepage"]}>
      <h2>Reserve Page</h2>
      <form className={styles["formulario"]} onSubmit={sendReserve}>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your e-mail here" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReservePage;
