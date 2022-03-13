import React from "react";
import { RiEmotionSadLine } from "react-icons/ri";

const ErrorMessage = ({ error }) => {
  return (
    <div className="d-flex flex-row text-center align-items-center justify-content-center mt-5 text-white">
      <h5 style={{ alignSelf: "center", maxWidth: "50%" }}>
        {error} <RiEmotionSadLine />
      </h5>
    </div>
  );
};

export default ErrorMessage;
