import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowSwitch } from '@styled-icons/octicons/ArrowSwitch';

export default function Searchbar({ getQuery, isMovie, setIsMovie }) {
  const [text, setText] = useState('');
  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };

  const clickHandler = () => {
    setIsMovie(!isMovie);
    setText('');
  };

  return (
    <SearchWrapper>
      <Inputstyler
        type="text"
        placeholder={isMovie ? 'Search for Movies' : 'Search for TV Shows'}
        value={text}
        onChange={(event) => onChange(event.target.value)}
        autoFocus
      />
      <SearchButton onClick={clickHandler}>
        <SwitchIcon /> {isMovie ? 'Shows' : 'Movies'}
      </SearchButton>
    </SearchWrapper>
  );
}

Searchbar.propTypes = {
  getQuery: PropTypes.func,
  isMovie: PropTypes.bool,
  setIsMovie: PropTypes.func,
};

const SwitchIcon = styled(ArrowSwitch)`
  height: 20px;
  width: 20px;
  color: var(--secondary-100);
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--boxshadow);
  margin-bottom: 2rem;
  border-radius: 10px;
  width: 100%;
`;

const SearchButton = styled.button`
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
`;

const Inputstyler = styled.input`
  border: none;
  border-radius: 5px 0px 0px 5px;
  height: 30px;
  max-width: 800px;
  outline: none;
  width: 100%;
  background: var(--secondary-100);
  padding: 5px;
`;
