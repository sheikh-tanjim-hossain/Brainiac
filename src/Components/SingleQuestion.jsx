/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShuffleOption from "../Utils/ShuffelOption";
import useDecode from "../Utils/useDecode";
import SingleBtn from "./SingleBtn";

export default function SingleQuestion({
  data,
  currentPosition,
  setCurrentPosition,
}) {
  const [btnClicked, setBtnClicked] = useState(false);
  const [allOption, setAllOption] = useState([]);
  const [btnText, setBtnText] = useState("next");
  const navigate = useNavigate();

  function handleNext() {
    console.log("next question clicked");

    setBtnClicked(false);
    if (currentPosition < data.length - 1) {
      setCurrentPosition(currentPosition + 1);
    }

    if (currentPosition == data.length - 1) {
      setBtnText("Show Result");
      navigate("/result");
    }
  }

  useEffect(() => {
    setAllOption(
      ShuffleOption([
        ...data[currentPosition].incorrect_answers,
        data[currentPosition].correct_answer,
      ])
    );
  }, [currentPosition, data]);

  return (
    <div className="grid md:grid-cols-2 md:grid-rows-4 w-11/12 gap-4">
      <h1 className="md:col-span-2 text-2xl text-center">
        {useDecode(data[currentPosition].question)}
      </h1>
      {allOption.map((item) => (
        <SingleBtn
          key={item}
          // key={crypto.randomUUID()}
          btnClicked={btnClicked}
          setBtnClicked={setBtnClicked}
          data={item}
          correctAnswer={data[currentPosition].correct_answer}
          question={data[currentPosition].question}
        />
      ))}
      <button
        className={`text-base text-center px-4 mx-2 md:col-span-2 my-3 h-full w-full rounded-lg bg-primary text-white font-semibold cursor-pointer hover:scale-105  
         `}
        onClick={handleNext}
      >
        {btnText}
      </button>
    </div>
  );
}
