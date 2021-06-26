import React from "react";
import { FC } from "react";
import Header from "../header";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div>
      <Header />
      this is home
      <button
        onClick={() => {
          alert("666");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Home;
