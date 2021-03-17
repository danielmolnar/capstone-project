import Home from './Pages/Home';
import Banner from '../src/components/Banner';
import styled from 'styled-components';

function App() {
  return (
    <>
      <div className="App">
        <Banner />
        <Buffer />
        <Home />
      </div>
    </>
  );
}

export default App;

const Buffer = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 150px;
`;
