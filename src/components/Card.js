//will contain all of the smaller components
import React, { useState, useEffect } from "react";
import axios from '../../../node_modules/axios';
import Title from "./components/Title";
import Dates from "./components/Dates";
import Image from "./components/Image";
import Desc from "./components/Desc";
import Footer from "./components/Footer";

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
        <div className="cards">
            <Title />
            <Dates />
            <Image />
            <Desc />
            <Footer />
        </div>
    );
}

export default Card;