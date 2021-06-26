import React from "react";
import { FC } from "react";
import Header from "../header";

interface Props {}

const Message: FC<Props> = () => {
  return (
    <div>
      <Header />
      message
    </div>
  );
};

export default Message;
