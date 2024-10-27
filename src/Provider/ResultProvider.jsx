/* eslint-disable react/prop-types */
import { useState } from "react";
import { ResultContext } from "../Context/ContextIndex";

export default function ResultProvider({ children }) {
  const [result, setResult] = useState({
    correct: 0,
    attempt: 0,
    time: 1,
  });
  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
}
