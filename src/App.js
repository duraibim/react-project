import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather Application</h1>
      <Weather defaultCity="New York"/>
      <footer>
        This project was coded by Manal Alduraibi🐞 and is {""} 
          <a
            href="https://github.com/duraibim/react-project" 
            target="_blank"
            rel="noopener noreferrer"
          > Open-source code on GitHub</a> 
          
          </footer> 
        </div>
    </div>
  );
}
