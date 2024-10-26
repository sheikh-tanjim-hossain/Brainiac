import { useContext } from "react";
import { ResultContext } from "../Context/ContextIndex";
import useCounter from "../Hooks/useCounter";

export default function Timer() {
  const { result } = useContext(ResultContext);
  return (
    <div className="flex justify-between border-b-2 border-primary font-semibold py-2 scroll-px-40 mb-2 md:px-4">
      <h1 className="text-xl text-gray-500 md:text-2xl ">{useCounter()}</h1>
      <h1 className="text-lg text-green-600 md:text-2xl">
        Correct: {result.correct}
      </h1>
    </div>
  );
}
