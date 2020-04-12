import React, { useState } from "react";

const Dates = props => {
    const [date, setDate] = useState([]);

    return (
      <h3>{props.date}</h3>
    );
}

export default Dates;