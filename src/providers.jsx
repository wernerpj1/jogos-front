import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const JogosContext = createContext ({
    loading: false,
    user: {},
    token: ''
});

const JogosProvider = ({ children }) => {
    
  const [ userState, setUserState ] = useState({
      hasUser: false,
      loading: false,
      user: {
          id: undefined,
          email: undefined,
          nome: undefined,
          senha: undefined,
          token: undefined
      }
  });  
  const getUser = (userdata) => {
      setUserState((prevState) => ({
          ...prevState,
          loading: !prevState
      }));  
      api
      .post('api/V1/Login/Login', userdata)
      .then(({ data }) => {
          setUserState((prevState) => ({
            ...prevState,
            hasUser: true,
            user: {
              id: data.id,
              email: data.email,
              nome: data.nome,
              senha: data.senha,
              token: data.token
            },
              }));
      })
      .finally(() => {
        setUserState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  }
}