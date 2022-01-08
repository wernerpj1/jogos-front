import React from 'react'
import Slider from "react-slick";
import { GameCardContainer } from '../containers/GameCardContainer';

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
                <GameCardContainer />
                <GameCardContainer />
                <GameCardContainer />
                <GameCardContainer />
                <GameCardContainer />
                <GameCardContainer />
                
            </Slider>      
        </>
    )
}
