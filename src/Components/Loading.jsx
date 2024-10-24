import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <FontAwesomeIcon
        icon={faSpinner}
        className="animate-spin h-8 w-8 md:h-14 md:w-14"
      />
    </div>
  );
}
