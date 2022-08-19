import React, { useEffect, useRef, useState } from "react";
import { TDialogMessageProps } from "../../components/DialogMessage/DialogMessage";
import DialogMessage from "../../components/DialogMessage/DialogMessage";
import { messages } from "./constants";
import css from "./MainPage.module.scss";
import getCurrentDate from "../../helpers/getCurrentDate";

function MainPage() {
  const afterLastMessageRef = useRef(null);
  const [input, setInput] = useState("");
  const [messagesArr, setMessagesArr] = useState([...messages]);

  const scrollToBottom = () => {
    // @ts-ignore
    afterLastMessageRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesArr]);

  const handleClick = () => {
    let currentDate = getCurrentDate();
    // @ts-ignore
    let lastMessageDate: string = messagesArr.findLast(
      (mes: TDialogMessageProps) => mes.type === "date"
    ).message;
    let newMessages: TDialogMessageProps[] = [];
    if (input !== "") {
      newMessages = [
        { type: "user", message: input },
        { type: "apponent", message: "Это означает," },
      ];
      if (currentDate !== lastMessageDate) {
        newMessages.unshift({ type: "date", message: currentDate });
      }
    }
    if (newMessages.length !== 0) {
      setMessagesArr([...messagesArr, ...newMessages]);
      setInput("");
    }
  };

  return (
    <div className={css.body}>
      <section className={css.container}>
        <div className={css.dialog_area}>
          <div className={css.dialog_area__inner}>
            {messagesArr.map((message: TDialogMessageProps) => (
              <DialogMessage {...message} />
            ))}
            <div ref={afterLastMessageRef}></div>
          </div>
        </div>

        <form className={css.input_form} name="input-form" action="">
          <textarea
            className={css.input_form__text_area}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Введите сообщение"
          ></textarea>
          <button
            className={css.input_form__btn}
            type="button"
            onClick={() => handleClick()}
          >
            Отправить
          </button>
        </form>
      </section>
    </div>
  );
}

export default MainPage;
