import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../Context/ContextIndex";

export default function Result() {
  const { result } = useContext(ResultContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-4">
        <h1 className="text-center text-3xl md:text-5xl text-primary font-semibold uppercase underline ">
          Final Result
        </h1>
        <div className="mt-4">
          <h1 className="text-xl md:text-4xl text-center mt-4">
            Correct: {result.correct}{" "}
            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
          </h1>
          <h1 className="text-xl md:text-4xl text-center mt-3">
            Attempt: {result.attempt}{" "}
            <FontAwesomeIcon icon={faXmark} className="text-red-600" />
          </h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            className="text-base text-center py-3 w-1/2 max-w-[400px] min-w-[150px] rounded-lg bg-primary text-white font-semibold cursor-pointer hover:scale-105  
         "
            onClick={() => {
              navigate("/");
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}
