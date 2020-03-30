//will contain all of the smaller components
import React, { useState, useEffect } from "react";
import ".components/Title";
import ".components/Date";
import ".components/Image";
import ".components/Desc";
import ".components/Footer";

const Card = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=eDgfeOTssRYURzaAY0st3XjcRSTpSthkhka1IHKP")
        .then(response => {
            console.log(response.data);
            setCard(response.data);
        })
        .catch(error => {
            console.log("Error retrieving data");
        })
    }, []);

    return (
        <div className="card">
            <Title></Title>
            <Date></Date>
            <Image></Image>
            <Desc></Desc>
            <Footer></Footer>
        </div>
    );
}