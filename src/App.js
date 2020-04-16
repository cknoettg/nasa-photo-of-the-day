import React from "react";
import "./App.css";
import Card from "./components/Card";
import styled from "styled-components";

//added styled components pieces, removed css files
//we create a style that we plan on attaching to our div with class
//  name 'cards'
//if we had a second div with a different class name, then we would
//  create a second styled.div variable, and just call it later in
//  our JSX with 'second-div-classname' as modifier
const CardStyle = styled.div`
  width:75%;
`;

function App() {
  return (
    <div className="App">
      <h1 className="App-logo">NASA Photo of the Day</h1>
      <CardStyle cards />
      <Card />
    </div>
  );
}

export default App;
