//will contain all of the smaller components
import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import Dates from "./Dates";
import Image from "./Image";
import Desc from "./Desc";
import Footer from "./Footer";
import styled from "styled-components";
//removed Card.css reference - deleted Card.css file

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
            <Title title={card.title} />
            <Dates date={card.date} />
            <Image imag={card.hdurl} />
            <Desc desc={card.explanation} />
            <Footer />
        </div>
    );
}

export default Card;