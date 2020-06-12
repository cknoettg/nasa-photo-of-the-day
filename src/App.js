import React from "react";
import "./App.css";
import Card from "./components/Card";
import styled from "styled-components";

//added styled components pieces, removed css files
//unique variable names can allow us to add styling
//  without even using class names in some instances

//changed infinite to 5s
const H1Style = styled.h1`
  height: 40vmin;
  font-size: 96px;
  pointer-events: none;
  margin: 5%;
  color: rgb(0, 255, 85);
  @media (prefers-reduced-motion: no-preference) {
       animation: App-logo-spin 5s 20s linear;
    }
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`;

const CardStyle = styled.div`
  width:75%;
`;

function App() {
  return (
    <div className="App">
      <H1Style>NASA Photo of the Day</H1Style>
      <CardStyle><Card /></CardStyle>      
    </div>
  );
}

export default App;
