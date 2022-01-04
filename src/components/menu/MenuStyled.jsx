import styled from "styled-components";

export const Menu = styled.div`
    
    width: 60px;
    height: 60px;
    background-color: gray;
    border-radius: 50%;
    position: fixed;
    top: 60px;
    right: 25px;
    
    `;
export const Hamburguer = styled.span`
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    background-color: #000;

    &:before, &:after {
        background-color: #000;
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    &:before {
        top: -10px;
    }
    &:after {
        botton: -10px;
    }
`