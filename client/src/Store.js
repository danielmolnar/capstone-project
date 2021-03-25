import React, { useState } from 'react';

export const MovieContext = React.createContext();

const Store = ({ children }) => {
  const [checkWatchlist, setCheckWatchlist] = useState(false);

  return (
    <MovieContext.Provider value={[checkWatchlist, setCheckWatchlist]}>
      {children}
    </MovieContext.Provider>
  );
};

export default Store;
