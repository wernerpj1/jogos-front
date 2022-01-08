import React, { memo } from 'react'
import * as S from './StyledNavLogged'
import propTypes from 'prop-types';


function NavLogged(props) {
    const { open, onClick, userMail, userName } = props

    return (
        <S.NavBar open={open}>
            <S.LabelNavLogged type="email"> {userMail} </S.LabelNavLogged>
            <S.LabelNavLogged type="text"> {userName} </S.LabelNavLogged>
            <S.ButtonApp onClick={onClick}>Sair</S.ButtonApp>
        </S.NavBar>
    )

}
NavLogged.propTypes = {
    onClick: propTypes.func.isRequired,
    userMail: propTypes.string.isRequired,
    userName: propTypes.string.isRequired
}

export default memo(NavLogged)

