import { useState } from "react";

function Btn() {
  const [Word, setWord] = useState("Hungry");

  function clickHandler() {
    setWord("Filled");
  }

  return (
    <>
      <button onClick={clickHandler}>clicked</button>
      {/* <span>{"I am" + " " + Word}</span> */}
      <span>{`I am ${Word}`}</span>
    </>
  );
}

export default Btn;
