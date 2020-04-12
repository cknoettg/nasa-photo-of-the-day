import React, { useState } from "react";

const Desc = props => {
    const [desc, setDesc] = useState([]);

    return (
      <h3>{props.desc}</h3>
    );
}

export default Desc;