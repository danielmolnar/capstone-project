import Home from './Pages/Home';
import Banner from '../src/components/Banner';
import styled from 'styled-components';
import React, { useState } from 'react';

function App() {
  const [isWatchList, setIsWatchList] = useState([]);

  function addToWatchList(movieToAdd) {
    const isOnWatchList = isWatchList.some(
      (movie) => movie.id === movieToAdd.id
    );

    if (!isOnWatchList) {
      setIsWatchList([...isWatchList, movieToAdd]);
    } else
      setIsWatchList(isWatchList.filter((movie) => movie.id !== movieToAdd.id));
  }

  return (
    <>
      <div className="App">
        <Banner />
        <Buffer />
        <Home addToWatchList={addToWatchList} />
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
