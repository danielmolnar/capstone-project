import CardButton from './Ui/Button/CardButton';

export default function AddToWatchList({ checkOnWatchList, addToWatchList }) {
  let buttonText;

  checkOnWatchList
    ? (buttonText = 'Remove from Watchlist')
    : (buttonText = 'Add to Watchlist ');

  return <CardButton buttonText={buttonText} addToWatchList={addToWatchList} />;
}
