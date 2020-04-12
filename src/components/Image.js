import React, { useState } from "react";

const Image = props => {
    const [img, setImg] = useState([]);

    return (
      <img src={props.url} alt="Image Not Loaded"></img>
    );
}

export default Image;