import React from "react";
import "./App.css";
import Card from "./components/Card";
import styled from "styled-components";

//added styled components pieces, removed css files
//unique variable names can allow us to add styling
//  without even using class names in some instances
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
