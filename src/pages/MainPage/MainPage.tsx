import React, { useEffect, useRef, useState } from "react";
import { TDialogMessageProps } from "../../components/DialogMessage/DialogMessage";
import DialogMessage from "../../components/DialogMessage/DialogMessage";
import { messages } from "./constants";
import css from "./MainPage.module.scss";

function MainPage() {

  const myRef = useRef(null);

  const [input, setInput] = useState('');
  const [messagesArr, setMessagesArr] = useState(messages);

  const scrollToBottom = () => {
    // @ts-ignore
    myRef.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }

  useEffect(()=> {
    console.log(myRef)
    scrollToBottom()
  },[messagesArr])

  const handleClick = () => {
    if (input !== '') {
      setMessagesArr([...messagesArr, {type:"user", message: input}, {type:"apponent", message: "Это означает,"}]);
      setInput('');
    }
  }

  return (
    <div className={css.body} >
      <section className={css.container}>
        <div className={css.dialog_area}>
          <div className={css.dialog_area__inner}>
            {messagesArr.map((message: TDialogMessageProps) => (
              <DialogMessage {...message}/>
            ))}
            <div ref={myRef}></div>
          </div>
        </div>

        <form className={css.input_form} name="input-form" action="">
          <textarea
            className={css.input_form__text_area}
            value = {input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Введите сообщение"
          ></textarea>
          <button
            className={css.input_form__btn}
            type="button"
            onClick={()=>handleClick()}
          >
            Отправить
          </button>
        </form>
      </section>
    </div>
  );
}

export default MainPage;
