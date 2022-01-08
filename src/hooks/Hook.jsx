import { useContext } from "react";
import { JogosContext } from "../providers/jogosProvider";

const useJogos = () => {
    const {userState, getUser, getUserGames, getAllGames } = useContext(
        JogosContext
    );

    return { userState, getUser, getUserGames, getAllGames };
};
export default useJogos;