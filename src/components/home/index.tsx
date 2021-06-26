import React from "react";
import { FC } from "react";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div>
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
