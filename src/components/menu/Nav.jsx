import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform all 0.3s linear;
    flex-flow: row nowrap;
    position: fixed;
    background-color: gray;
    top: 25px;
    left: 0;
    height: 30px;
`;

const Nav = ({ open }) => {
    return (
        <NavBar open={ open }>
            <input type="text">
          
            </input> 
            <button>
                botao
            </button>
        </NavBar>
    )
}

export default Nav
