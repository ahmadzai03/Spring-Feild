import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Food from "./components/Food.jsx";

ReactDOM.render(
    <div>
    
        <h1 className='spring'>BlueBonnet</h1>
        <Food />
        <App /><App />
      
    </div>
    , document.getElementById("root")
);
