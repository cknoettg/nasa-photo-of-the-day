import React, { useState } from "react";

const Image = props => {
    const [imag, setImag] = useState([]);

    return (
      <img src={props.imag} alt="Image Not Loaded"></img>
    );
}

export default Image;