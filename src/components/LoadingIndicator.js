import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingIndicator = () => {
  return (
    <div className="d-flex flex-row text-center align-items-center justify-content-center mt-5 text-white">
      <Spinner animation="border" variant="white" />
    </div>
  );
};

export default LoadingIndicator;
