import React, {useEffect} from 'react'
import * as S from './StyledGameCard'
import useJogos from '../../hooks/Hook'

export const GameCard = (props) => {
    const { userState, getAllGames } = useJogos();
    const { key, imagem, nome, descricao } = props
   
    return (
        <>
        <S.GameCardLayout>
          <img src={imagem}></img>
            <S.Section>
              
            </S.Section>
        </S.GameCardLayout>  
        </>
    )
}
