export default function sortFilter(data, profile, setState) {
  const filteredData = data.filter((friend) => friend._id !== profile._id);
  const sortedData = filteredData.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  setState(sortedData);
}

export function checkExistingUser(userProfile) {
  if (userProfile === null) {
    return false;
  } else if (Object.keys(userProfile).length === 0) {
    return false;
  } else return true;
}
