import React from "react";
import css from "./DialogMessage.module.scss";

export type TDialogMessageProps = {
  type: string;
  message: string;
};

function DialogMessage({ type, message }: TDialogMessageProps) {
  return (
    <div className={`${css.dialog_area__message} ${css.user}`}>
      <div className={`${css.message} ${css.message_user}`}>{message}</div>
    </div>
  );
}

export default DialogMessage;
