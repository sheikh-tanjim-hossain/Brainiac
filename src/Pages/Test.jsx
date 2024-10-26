/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleQuestion from "../Components/SingleQuestion";
import Timer from "../Components/Timer";

export default function Test({ data }) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length == 0 || !data) {
      // navigate("/select");
    }
  }, [currentPosition, data, navigate]);

  return (
    <>
      <section className="mt-1">
        <Timer />
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
