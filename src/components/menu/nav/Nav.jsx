import React, {memo, useState} from 'react'
import * as S from './StyledNav'
import propTypes from 'prop-types';
import useJogos from '../../../hooks/Hook';


function Nav (props)  {
    const {open} = props
    const { getUser, getAllGames } = useJogos();
    const [usernameForSearch, setUsernameForSearch] = useState();
    const [userpasswordForSearch, setUserpasswordForSearch] = useState();
    

   const  formUser = {
        email: usernameForSearch,
        senha: userpasswordForSearch,
    };
    
    const HandleClick = () => {
        if (!usernameForSearch) return;
            return getUser(formUser);
    };

    

    return (
        <S.NavBar open={ open }>
            
            <S.InputNav type="email" placeholder='Example@example.com' 
                onChange={(event) => setUsernameForSearch(event.target.value)}/>
            <S.InputNav type="password" placeholder='Senha:' 
                onChange={(event) => setUserpasswordForSearch(event.target.value)}/>
            <S.ButtonApp onClick={HandleClick}>Login</S.ButtonApp>
        
        </S.NavBar>
    )
   
}
Nav.propTypes = {
    onClick: propTypes.func.isRequired,
    userMail: propTypes.string.isRequired,
    senha: propTypes.string.isRequired
}

export default memo(Nav)
