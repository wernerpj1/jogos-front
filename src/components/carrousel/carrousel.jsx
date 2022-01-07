import React from 'react'
import Slider from "react-slick";
import { GameCard } from '../gameCard/GameCard';

export const Carrousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <>
            <Slider {...settings}>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </Slider>      
        </>
    )
}
