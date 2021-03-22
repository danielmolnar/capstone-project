import React, { useState } from 'react';

export const Context = React.createContext();

const Store = ({ children }) => {
  const [checkWatchlist, setCheckWatchlist] = useState(false);

  return (
    <Context.Provider value={[checkWatchlist, setCheckWatchlist]}>
      {children}
    </Context.Provider>
  );
};

export default Store;

// value={{
//   checkWatchlist: [checkWatchlist, setCheckWatchlist],
//   search: [search, setSearch],
// }}
