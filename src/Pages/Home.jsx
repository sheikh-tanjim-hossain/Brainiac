import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import HeroImage from "./../assets/Hero Image.svg";
export default function Home() {
  return (
    <section id="hero" className="">
      <FontAwesomeIcon icon="fa-solid fa-brain" />
      <div className="h-svh md:h-auto flex flex-col md:flex-row justify-center md:justify-evenly items-center">
        <div className="h-3/5 mt-2 md:mt-16 md:h-full">
          <img
            src={HeroImage}
            className="w-full h-full md:h-11/12"
            alt="Hero Image"
          />
        </div>

        <div className="h-2/5 md:h-full flex flex-col items-center md:justify-center mt-8 md:mt-20">
          <h1 className="text-3xl md:text-5xl text-center font-semibold">
            Ready to test yourself?
          </h1>
          <p className="md:text-base mt-4 text-center">
            Select a topic - Give a quiz - Shere your score
          </p>
          <button className="mt-6">
            <Link
              to="/select"
              className="bg-primary border rounded-md text-white px-4 py-2 md:text-base cursor-pointer"
            >
              Select Preference
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
