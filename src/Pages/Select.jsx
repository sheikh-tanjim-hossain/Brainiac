/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { ResultContext } from "../Context/ContextIndex";
import getAmmount from "../Utils/getAmmount";

export default function Select({ setData }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [allCategory, setAllCategory] = useState([]);
  const { result, setResult } = useContext(ResultContext);

  async function handleFrom(e) {
    setIsLoading(true);
    e.preventDefault();

    const selectedCatagory = e.target[0].value;
    const selectedDifficulty = e.target[1].value;
    const setTime = e.target[2].value;
    const ammount = await getAmmount(selectedCatagory, selectedDifficulty);

    const response = await fetch(
      `https://opentdb.com/api.php?amount=${ammount}&category=${selectedCatagory}&difficulty=${selectedDifficulty}`
    );

    const apiData = await response.json();
    if (apiData.response_code == 0) {
      setData([...apiData.results]);
      setIsLoading(false);
      setResult({ ...result, correct: 0, attempt: 0, time: setTime });
      navigate("/test");
    }
  }

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      const resposne = await fetch(`https://opentdb.com/api_category.php`);

      const data = await resposne.json();

      if (data) {
        setIsLoading(false);
      }
      setAllCategory([...data.trivia_categories]);
    }

    fetchData();

    return () => {
      setAllCategory([]);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section id="select" className="block md:mt-9 mt-4">
          <h1 className="text-3xl md:text-5xl text-primary text-center capitalize font-semibold md:mb-6">
            Choose your preference
          </h1>
          <form action="" onSubmit={handleFrom}>
            <div className="w-full text-base md:text-xl flex flex-col md:flex-row justify-evenly md:justify-center items-center my-4 md:my-7">
              <label
                htmlFor="category"
                className="w-full md:w-auto md:mr-3 capitalize text-primary font-semibold p-2"
              >
                Select Category:
              </label>
              <select className="w-full md:w-1/4 bg-white p-2">
                {allCategory.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    className="w-full h-full"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full text-base md:text-xl flex flex-col md:flex-row justify-evenly md:justify-center items-center my-4 md:my-7">
              <label
                htmlFor="category"
                className="w-full md:w-auto md:mr-3 capitalize text-primary font-semibold p-2"
              >
                Select Difficulty:
              </label>
              <select className="w-full md:w-1/4 bg-white p-2">
                <option value="easy" className="w-full h-full">
                  Easy
                </option>
                <option value="medium" className="h-full w-full">
                  Medium
                </option>
                <option value="hard" className="h-full w-full">
                  Hard
                </option>
              </select>
            </div>
            <div className="w-full text-base md:text-xl flex flex-col md:flex-row justify-evenly md:justify-center items-center my-4 md:my-7">
              <label
                htmlFor="category"
                className="w-full md:w-auto md:mr-3 capitalize text-primary font-semibold p-2"
              >
                Set Time: {"(In Minutes)"}
              </label>
              <input
                type="number"
                min="1"
                defaultValue={1}
                className="w-full md:w-1/4 bg-white p-2"
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                className="bg-primary border rounded-md text-white px-4 py-2 md:text-base cursor-pointer"
              >
                Start Quiz
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
