import React, { useState } from 'react';

export const Context = React.createContext();

const Store = ({ children }) => {
  const [checkWatchlist, setCheckWatchlist] = useState(false);
  const [search, setSearch] = useState([]);
  return (
    <Context.Provider
      value={{
        watchlistValue: [checkWatchlist, setCheckWatchlist],
        searchValue: [search, setSearch],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;

// value={{
//   checkWatchlist: [checkWatchlist, setCheckWatchlist],
//   search: [search, setSearch],
// }}
