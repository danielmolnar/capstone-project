import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Searchbar({ getQuery, open }) {
  const [text, setText] = useState('');
  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };

  if (open) return null;

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
  width: 40%;
  outline: none;
  padding: 10px;
  margin-bottom: 2rem;
  height: 25px;
  border: none;
  border-radius: 5px;
  transition: width 0.4s ease-in-out;
  max-width: 800px;

  &:focus,
  &:hover {
    width: 60%;
    max-width: 800px;
  }
`;
