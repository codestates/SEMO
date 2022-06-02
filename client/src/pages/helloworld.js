import { useState } from "react";
import Signupmodal from "../modals/signupmodal";

const TEST = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>hello world</div>;
      <Signupmodal isOpen={isOpen} openModalHandler={openModalHandler} />
    </>
  );
};

export default TEST;
