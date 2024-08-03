import Image from "next/image";
import spinnerStyle from "./spinner.module.css";

const Spinner = () => {
  return (
    <Image
      src="/assets/icons/loader.svg"
      width={20}
      height={20}
      alt="loading..."
    />
  );
};

export default Spinner;
