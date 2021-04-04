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
  border: none;
  border-radius: 5px;
  height: 25px;
  margin-bottom: 2rem;
  max-width: 800px;
  outline: none;
  padding: 10px;
  /* transition: width 0.4s ease-in-out; */
  width: 40%;

  /* &:focus,
  &:hover {
    width: 60%;
    max-width: 800px;
  } */
`;
