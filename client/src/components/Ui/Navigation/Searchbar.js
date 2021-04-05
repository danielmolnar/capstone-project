import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowSwitch } from '@styled-icons/octicons/ArrowSwitch';

export default function Searchbar({ getQuery, showType, setShowType }) {
  const [text, setText] = useState('');
  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };

  const clickHandler = () => {
    setShowType(!showType);
    setText('');
  };

  return (
    <SearchWrapper>
      <Inputstyler
        type="text"
        placeholder={showType ? 'Search for Movies' : 'Search for TV Shows'}
        value={text}
        onChange={(event) => onChange(event.target.value)}
        autoFocus
      />
      <button onClick={clickHandler}>
        <SwitchIcon /> {showType ? 'Shows' : 'Movies'}
      </button>
    </SearchWrapper>
  );
}

Searchbar.propTypes = {
  getQuery: PropTypes.func,
  showType: PropTypes.bool,
  setShowType: PropTypes.func,
};

const SwitchIcon = styled(ArrowSwitch)`
  height: 20px;
  width: 20px;
  color: white;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--boxshadow);
  margin-bottom: 1.5rem;
  border-radius: 10px;
  width: 95%;

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--primary-100-opacity);
    border: none;
    border-radius: 0px 5px 5px 0px;
    width: 10rem;
    color: var(--secondary-100);
    font-weight: bold;
    height: 30px;
    outline: none;
    text-decoration: none;
    transition: transform 250ms;
    font-size: 0.7rem;
    cursor: pointer;
    :hover {
      background-color: var(--primary-100);
    }
  }
`;

const Inputstyler = styled.input`
  border: none;
  border-radius: 5px 0px 0px 5px;
  height: 30px;
  max-width: 800px;
  outline: none;
  transition: width 0.4s ease-in-out;
  width: 100%;
  background: white;
  padding: 5px;

  /* &:focus,
  &:hover {
    width: 60%;
    max-width: 800px;
  } */
`;
