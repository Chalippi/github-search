import React from "react";
import { RiEmotionSadLine } from "react-icons/ri";
import ErrorMessage from "./ErrorMessage";

const CardList = ({ data }) => {
  return !data.error ? <></> : <ErrorMessage error={data.error} />;
};

export default CardList;
