
import Menu from './components/menu/Menu';
import styled from 'styled-components';
import { GameCardContainer } from './components/containers/GameCardContainer';

const AppBack = styled.div`
  background-color: black;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <AppBack>
      <Menu />
      <GameCardContainer />
      </AppBack>
    </>
  );
}

export default App;
