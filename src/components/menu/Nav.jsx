import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
    transform: ${({ open }) => open ? 'translateX(10%)' : 'translateX(-170%)'};
    transition: transform all 0.3s linear;
    flex-flow: row nowrap;
    position: fixed;
    background-color: gray;
    max-width: 50vw;
    top: 15px;
    left: 2rem;
    max-height: 50vh;
    display: flex;


    input, button {
        width: 7rem;
        max-height: 1.5rem
        border-radius: 3px;
        padding: 0.2rem 0;
        margin: 0.5rem;
        background: transparent;
        color: white;
        border: 2px solid white;
        ::placeholder{
            color: white;
        }
    };
    button { 
        width: 4rem;
        
    }

`;

const Nav = ({ open }) => {
    return (
        <NavBar open={ open }>
            <input type="text" placeholder='Email:' />
            <input type="text" placeholder='Senha:'/>
            <button>Login</button>
        </NavBar>
    )
}

export default Nav
