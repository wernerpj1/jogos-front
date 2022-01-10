import styled from "styled-components";

export const GameCardLayout = styled.div`
    background-color: transparent;
    width: 30vw;
    height: 90vh;
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    align-items: center;
    img {
        width: 20vw;
        height: 40vh;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-wrap: now wrap;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 30vw;
    height: 10em;
    
`;

export const Nome = styled.div`
    color: white;
    position: relative;
    width: 100%;
    text-align: center;
    height: 30%;
    font-size: 2em;
`
export const Descricao = styled.div`
    color: white;
    position: relative;
    width: 100%;
    text-align: center;
    height: 30%;
    font-size: 1.2em;

`;