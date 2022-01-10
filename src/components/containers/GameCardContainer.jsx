import React, {useEffect, useState} from 'react';
import useJogos from '../../hooks/Hook';
import { GameCard } from '../gameCard/GameCard';
import Slider from "react-slick";


export const GameCardContainer = (props) => {
    const { userState, getAllGames } = useJogos();
    const [hasUserForGames, setHasUserForGames] = useState(false);
    const { imagem, key} = props; 
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    useEffect(() => {
       try {
           getAllGames();
           setHasUserForGames(userState.allGames);
       } 
       catch (e) {
           console.error(e);
       }
        
            
    }, [])
    return (
        <>
         {hasUserForGames ? (
                <Slider {...settings}>
              {userState.allGames.map((item) => (
                  <GameCard 
                    key={item.id}
                    imagem={item.imagem}
                    nome={item.nome}
                    descricao={item.descricao}
                  />
              ))}
              </Slider> 
              
               ) : (
                    <>
                    </>
                )
               
            }  
        </>
    );
}


