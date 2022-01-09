import React, {useEffect, useState} from 'react';
import useJogos from '../../hooks/Hook';
import { GameCard } from '../gameCard/GameCard';

export const GameCardContainer = () => {
    const { userState, getAllGames } = useJogos();
    const [hasUserForGames, setHasUserForGames] = useState(false);

    useEffect(() => {
        getAllGames()
        setHasUserForGames(userState.allGames)
            
    }, [])
    return (
        <>
            {userState.hasUser ? (
            <>
                {userState.loading ? (
                    <p>Loading</p>
                ) : (
            <>
               {userState.allGames.map((item) => (
                <GameCard
                  key={item.id}
                  name={item.name}
                  imagem={item.imagem}
                  descricao={item.descricao}
                />
              ))}
            </>
                )}
            </>
            ) : (
                <>
                <GameCard />
                </>
            )}
        </>
    );
}


