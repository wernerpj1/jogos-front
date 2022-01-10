import React, {useEffect, useState} from 'react';
import useJogos from '../../hooks/Hook';
import { GameCard } from '../gameCard/GameCard';
import Slider from "react-slick";


export const GameCardContainer = (props) => {
    const { userState, getAllGames } = useJogos();
    const [hasUserForGames, setHasUserForGames] = useState(false);
    const { imagem } = props; 

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
              <>
              {userState.allGames.map((item) => (
                  <GameCard 
                    key={item.id}
                    imagem={item.imagem}
                    nome={item.nome}
                    descricao={item.descricao}
                  />
              ))}
              </> 
              
               ) : (
                    <>
                    </>
                )
               
            }  
        </>
    );
}


