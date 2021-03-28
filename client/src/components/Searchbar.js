import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Searchbar({ getQuery }) {
  const [text, setText] = useState('');
  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };

  return (
    <>
      <Inputstyler
        type="text"
        placeholder="Search for Movies"
        value={text}
        onChange={(event) => onChange(event.target.value)}
        autoFocus
      />
    </>
  );
}

Searchbar.propTypes = {
  getQuery: PropTypes.func,
};

const Inputstyler = styled.input`
  width: 20%;
  outline: none;
  padding: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 20px;
  height: 25px;
  border: none;
  border-radius: 5px;
  transition: width 0.4s ease-in-out;

  &:focus,
  &:hover {
    width: 50%;
  }
`;
