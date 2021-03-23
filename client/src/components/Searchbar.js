import React, { useState } from 'react';
import styled from 'styled-components';

export default function Searchbar({ getQuery }) {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
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

const Inputstyler = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 5px;
`;
