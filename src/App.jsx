import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

function App(){
    return (    
     <div className='app'>
        <h1>React Router Demo</h1>
         <Navigation />
        <Main /> 
      </div>
    );
}
export default App;