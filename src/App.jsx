
import Menu from './components/menu/Menu';
import styled from 'styled-components';

const AppBack = styled.div`
  background-color: black;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <AppBack>
      <Menu />
      </AppBack>
    </>
  );
}

export default App;
