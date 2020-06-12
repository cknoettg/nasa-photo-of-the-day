import React, { useState } from "react";
import styled from "styled-components";
//Removed desc.css file - moved it to a styled-component

const DescStyle = styled.h3`
    width:75%;
    margin: 0 auto;
    padding: 5%;
`;

const Desc = props => {
    const [desc, setDesc] = useState([]);

    return (
      <DescStyle> {props.desc}</DescStyle>
    );
}

export default Desc;