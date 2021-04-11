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
