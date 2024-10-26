import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../Context/ContextIndex";

let countingTimer;

function exitTimer() {
  clearTimeout(countingTimer);
}

export default function useCounter() {
  const { result } = useContext(ResultContext);
  const [min, setMin] = useState(result.time);
  const [sec, setSec] = useState(0);
  const navigate = useNavigate();

  let Finalresult = "00:00";
  if (sec == 0) {
    setSec(60);
    setMin(min - 1);
  }

  countingTimer = setTimeout(() => {
    setSec(sec - 1);
  }, 1000);

  Finalresult = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;

  if (min < 0) {
    exitTimer();
    Finalresult = `00:00`;
    navigate("/result");
  }

  return Finalresult;
}
