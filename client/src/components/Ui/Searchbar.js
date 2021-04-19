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
        data-testid="search-input"
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
  color: var(--secondary-100);
  height: 20px;
  width: 20px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: var(--boxshadow);
  margin-bottom: 1rem;
  width: 100%;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--primary-100-opacity);
  border: none;
  border-radius: 0px 5px 5px 0px;
  color: var(--secondary-100);
  cursor: pointer;
  font-size: 0.7rem;
  height: 30px;
  outline: none;
  text-decoration: none;
  transition: transform 250ms;
  width: 10rem;
  :hover {
    background-color: var(--primary-100);
  }
`;

const Inputstyler = styled.input`
  background: var(--secondary-100);
  border: none;
  border-radius: 5px 0px 0px 5px;
  height: 30px;
  max-width: 800px;
  outline: none;
  padding: 5px;
  width: 100%;
`;
