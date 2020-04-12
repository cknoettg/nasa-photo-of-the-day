import React, { useState } from "react";
import "./Desc.css";

const Desc = props => {
    const [desc, setDesc] = useState([]);

    return (
      <h3 class="nice">{props.desc}</h3>
    );
}

export default Desc;