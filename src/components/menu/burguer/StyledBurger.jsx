import styled from 'styled-components'

export const MenuStyle = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const BurgerStyle = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    left: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;


    div {
        width: 2rem;
        height: 0.25rem;
        background-color: white;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        z-index: 20;
   
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? '0' : '1'};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
   
    }
   
`;
