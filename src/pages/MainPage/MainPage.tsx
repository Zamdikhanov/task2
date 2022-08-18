import React from "react";
import { TDialogMessageProps } from "../../components/DialogMessage/DialogMessage.tsx";
import DialogMessage from "../../components/DialogMessage/DialogMessage.tsx";
import { messages } from "./constants.ts";
import css from "./MainPage.module.scss";

function MainPage() {
  return (
    <section className={css.container}>
      <div className={css.dialog_area}>
        <div className={css.dialog_area__inner}>
          {messages.map((message: TDialogMessageProps) => (
            <DialogMessage {...message} />
          ))}
        </div>
      </div>

      <form className={css.input_form} name="input-form" action="">
        <textarea
          className={css.input_form__text_area}
          id="input-form__text-area"
          name="input-form__text-area"
          placeholder="Введите сообщение"
        ></textarea>
        <input
          className={css.input_form__btn}
          type="button"
          value="Отправить"
        />
      </form>
    </section>
  );
}

export default MainPage;
