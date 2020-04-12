import React, { useState } from "react";

const Title = props => {
    const [title, setTitle] = useState([]);

    return (
      <h3 style={{padding: '5%'}}>{props.title}</h3>
    );
}

export default Title;