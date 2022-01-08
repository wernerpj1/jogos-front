import React from "react";
import { useJogos } from '../../hooks/Hook';
import Nav from "../menu/nav/Nav";
import NavLogged from "../menu/navLogged/NavLogged";

const NavUser = (props) => {
  const { userState } = useJogos();
  const { open } = props

const HandleClick = () => {

}
  return (
    <>
      {userState.hasUser ? (
        <>
          {userState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <NavLogged open={open}/>
            </>
          )}
        </>
      ) : (
        <>
              <Nav open={open}/>
        </>
      )}
    </>
  );
}
export default NavUser;