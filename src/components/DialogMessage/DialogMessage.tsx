import React, { useEffect, useRef } from "react";
import Avatar from "../Avatar/Avatar";
import css from "./DialogMessage.module.scss";

export type TDialogMessageProps = {
  type: string;
  message: string;
};

function DialogMessage({ type, message }: TDialogMessageProps) {

  if (type === "date") {
    return (
      <div className={css.date_line}>
        <div className={`${css.line} ${css.line_left}`}></div>
        <div className={css.date}>17 октября 2017 г.</div>
        <div className={`${css.line} ${css.line_right}`}></div>
    </div>
    )
  }

  return (
    <div className={`${css.message} ${type==="user" ? css.user : css.appponent}`}>
        <div className={css.message_avatar}>
          <Avatar />
        </div>
        <div className={`${css.message_text} ${type==="user" ? css.left : css.right}`}>
          {message}
        </div>
        <div className={css.message_empty}></div>
    </div>
  );
}

export default DialogMessage;
