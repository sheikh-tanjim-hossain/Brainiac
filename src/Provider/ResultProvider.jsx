import { useState } from "react";
import { ResultContext } from "../Context/ContextIndex";

export default function ResultProvider({ children }) {
  const [result, setResult] = useState({
    correct: 0,
    attempt: 0,
  });
  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
}
