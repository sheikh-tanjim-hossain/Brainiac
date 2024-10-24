import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* navbar */}
      <nav className="text-3xl flex flex-row justify-center items-center h-16 p-auto text-white bg-primary/[.90] shadow-sm w-full">
        <Link to="/" className="cursor-pointer">
          {/* <i className="fa-solid fa-brain mr-4"></i> */}

          <FontAwesomeIcon icon={faBrain} className="mr-4" />
          <span className="uppercase font-semibold">Brainiac</span>
        </Link>
      </nav>
    </header>
  );
}
