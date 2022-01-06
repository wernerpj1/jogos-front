import * as S from './StyledBurger'
import React, { useState, memo } from 'react'
import Nav from '../nav/Nav';



const Burger = () => {

    const [open, setOpen] = useState(false)
    return (
        <S.MenuStyle>
        <S.BurgerStyle open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </S.BurgerStyle>
        <Nav open={open}/>
        </S.MenuStyle>
    )
}

export default memo(Burger)
