function sortFilter(data, profile, setState) {
  const filteredData = data.filter((friend) => friend._id !== profile._id);
  const sortedData = filteredData.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  setState(sortedData);
}

export default sortFilter;

export const friendsFavorites = (friends) => {
  const newFavorites = friends.filter((list) => list.favorites.length !== 0);
  return newFavorites;
};

export const addToList = (list, movieToAdd, setState) => {
  const isOnList = (movieToAdd) =>
    list.some((movie) => movie.id === movieToAdd);
  isOnList(movieToAdd)
    ? setState(list.filter((movie) => movie.id !== movieToAdd))
    : setState([...list, movieToAdd]);
};
