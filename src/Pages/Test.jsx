/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleQuestion from "../Components/SingleQuestion";

export default function Test({ data }) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length == 0 || !data) {
      navigate("/select");
    }
  }, [currentPosition, data, navigate]);

  return (
    <>
      <section id="quiz" className="mt-6">
        {data.length && (
          <SingleQuestion
            data={data}
            currentPosition={currentPosition}
            setCurrentPosition={setCurrentPosition}
          />
        )}
      </section>
    </>
  );
}
