import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div>
      <Link to={"/"}>home</Link>
      <br/>
      <Link to={"/message"}>message</Link>
    </div>
  );
};

export default Header;
