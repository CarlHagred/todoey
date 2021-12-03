//import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ToDoList from "./pages/ToDoList";
/*
import ToDoPage from "./pages/ToDoPage";
<Button variant="contained" onClick={deleteCallBack}>
  Delete
</Button> 
*/

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ToDoList />} />
      </Routes>
    </Router>
  );
};

export default App;
