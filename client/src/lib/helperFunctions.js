export default function sortFilter(data, profile, setState) {
  let filteredData;
  if (profile) {
    filteredData = data.filter((friend) => friend?._id !== profile?._id);
  } else filteredData = data;
  const sortedData = filteredData.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  setState(sortedData);
}
