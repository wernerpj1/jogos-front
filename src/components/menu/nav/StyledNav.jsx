import styled from 'styled-components'

export const NavBar = styled.div`
    transform: ${({ open }) => open ? 'translateX(10%)' : 'translateX(-170%)'};
    transition: transform all 0.3s linear;
    flex-flow: row nowrap;
    position: fixed;
    background-color: black;
    max-width: 50vw;
    top: 5px;
    left: 2rem;
    max-height: 50vh;
    display: flex;
       
`;
export const ButtonApp = styled.button`
    width: 10rem;
    height: 25px;
    border-radius: 3px;
    padding: 0.2rem 0;
    margin: 0.5rem;
    background: transparent;
    color: white;
    border: 0.5px solid white;
    `;
export const InputNav = styled.input`
    font-family: roboto;
    width: 10rem;
    height: 25px;
    border-radius: 3px;
    padding: 0.2rem 0;
    margin: 0.5rem;
    background: transparent;
    color: white;
    border: 0.5px solid white;
    ::placeholder{
        color: white;
        padding-left: 12px;
    }
`;