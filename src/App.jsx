
import Menu from './components/menu/Menu';
import styled from 'styled-components';
import { Carrousel } from './components/carrousel/carrousel';

const AppBack = styled.div`
  background-color: black;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <AppBack>
      <Menu />
      <Carrousel />
      </AppBack>
    </>
  );
}

export default App;
