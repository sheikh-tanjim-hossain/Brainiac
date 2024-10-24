import { useContext, useEffect, useState } from "react";
import { ResultContext } from "../Context/ContextIndex";
import useDecode from "../Utils/useDecode";

/* eslint-disable react/prop-types */
export default function SingleBtn({
  btnClicked,
  setBtnClicked,
  data,
  correctAnswer,
  question,
}) {
  const [bgColor, setBgColor] = useState("");
  const { result, setResult } = useContext(ResultContext);

  function handleClick(e) {
    setBtnClicked(true);

    if (e.target.value == correctAnswer) {
      setResult({
        ...result,
        correct: result.correct + 1,
        attempt: result.attempt + 1,
      });
      setBgColor("bg-green-600 text-white");
    } else {
      setBgColor("bg-red-600 text-white");
      setResult({
        ...result,
        attempt: result.attempt + 1,
      });
    }
  }

  useEffect(() => {
    setBgColor("");
  }, [question]);

  return (
    <button
      className={`text-left text-base px-4 mx-2 my-3 h-full w-full border-2  ${
        !btnClicked ? "btn" : "cursor-not-allowed"
      }  ${bgColor} `}
      value={data}
      onClick={handleClick}
      disabled={btnClicked ? true : false}
    >
      {useDecode(data)}
    </button>
  );
}
