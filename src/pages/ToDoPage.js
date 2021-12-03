import React from "react";
import { useParams } from "react-router-dom";

const ToDoPage = () => {
  const { todo } = useParams();
  return <div>{todo}</div>;
};

export default ToDoPage;
