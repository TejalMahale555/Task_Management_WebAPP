import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          Task Managment App
        </h1>
        
        <button class="home-btn m-2 p-2">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
