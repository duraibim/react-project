import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer>
        This project was coded by Manal Alduraibi🐞 and is Open-sourced on {""} 
          <a
            href="https://github.com/duraibim/react-project" 
            target="_blank"
            rel="noopener noreferrer"
          >  GitHub</a> and hosted on <a
          href="https://gallant-bardeen-a1f62f.netlify.app" 
          target="_blank"
          rel="noopener noreferrer"
        > Netlify</a> 
          
          
          </footer> 
        </div>
    </div>
  );
}
