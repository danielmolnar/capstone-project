import Home from './Pages/Home';
import Header from '../src/components/Header';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header />

      <div className="App">
        <Buffer></Buffer>
        <Home />
      </div>
    </>
  );
}

export default App;

const Buffer = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 20%;
`;
