import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const JogosContext = createContext({
    loading: false,
    user: {},
    token: ''
});

const JogosProvider = ({ children }) => {

    const [userState, setUserState] = useState({
        hasUser: false,
        loading: false,
        allGames: [],
        user: {
            id: undefined,
            email: undefined,
            nome: undefined,
            senha: undefined,
            token: undefined
        },
    });
    
    const getAllGames = async () => {
           api.get('api/V1/Jogo/Buscar-Jogos')
            .then(({ data }) => {
                console.log("data: " + JSON.stringify(data));
                setUserState((prevState) => ({
                    ...prevState,
                    allGames: data,
                }))
            })
    }

    const header = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; utf-8'
        }
    }
    const getUser = (userdata) => {
        setUserState((prevState) => ({
            ...prevState,
            loading: !prevState
        }));
        
        
        api
            .post('api/V1/Login/Login/', userdata)
            .finally(() => {
                setUserState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            });
    }

   const getUserJogos = (idUser, token) => {

        let header = {
            headers: {'Authorization': "bearer" + token }
        }
       api.get(`api/V1/Buscar-Jogos-por-usuario/`, header)
        .then(({ data }) => {
            console.log("data: " + JSON.stringify(data));
            setUserState((prevState) => ({
                ...prevState,
                jogos: data,
            }));
        });
   };

   const contextValue = {
       userState,
       getUser: useCallback((username) => getUser(username), []),
       getUserJogos: useCallback(() => getUserJogos(), []),
       getAllGames: useCallback(() => getAllGames(), []),
   }
   return (
       <JogosContext.Provider value={contextValue}>
           {children}
       </JogosContext.Provider> 
   );

};
export default JogosProvider;