import React from 'react';
import useJogos from '../../hooks/Hook';
import { GameCard } from '../gameCard/GameCard';

export const GameCardContainer = () => {
    const { userState } = useJogos();
    return (
        <>
            {userState.hasUser ? (
            <>
                {userState.loading ? (
                    <p>Loading</p>
                ) : (
            <>
                <GameCard />
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


