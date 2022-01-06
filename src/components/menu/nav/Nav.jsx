import React, {memo} from 'react'
import * as S from './StyledNav'
import propTypes from 'prop-types';


function Nav (props)  {
    const {open, onClick, userMail, senha} = props

    return (
        <S.NavBar open={ open }>
            <S.InputNav type="email" placeholder='Example@example.com' value={userMail} />
            <S.InputNav type="password" placeholder='Senha:' value={senha}/>
            <S.ButtonApp onClick={onClick}>Login</S.ButtonApp>
        </S.NavBar>
    )
   
}
Nav.propTypes = {
    onClick: propTypes.func.isRequired,
    userMail: propTypes.string.isRequired,
    senha: propTypes.string.isRequired
}

export default memo(Nav)
