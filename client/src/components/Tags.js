import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Tags({
  addProfileTag,
  tags,
  removeProfileTag,
  removeLastTag,
}) {
  const [value, setValue] = useState('');

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addProfileTag(value);
      setValue('');
    }
    if (event.key === 'Backspace') {
      removeLastTag(tags);
    }
  };

  return (
    <>
      <SectionWrapper>
        {tagsList(tags, removeProfileTag)}

        <input
          type="text"
          name="tags"
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
      </SectionWrapper>
    </>
  );
}

function tagsList(tags, removeProfileTag) {
  return (
    <>
      {tags.map((tag, index) => (
        <span
          key={index}
          tabIndex="0"
          onKeyDown={(event) =>
            event.key === 'Backspace' && removeProfileTag(tag)
          }
        >
          {tag}
          <i onClick={() => removeProfileTag(tag)}>&times;</i>
        </span>
      ))}
    </>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

const SectionWrapper = styled.section`
  display: flex;

  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  margin-bottom: 1rem;
  padding: 0 1rem;
  /* gap: 5px; */

  p {
    margin: 0;
  }

  input {
    border: none;
    display: inline;
    outline: none;
    border-radius: 5px;
    background: none;
    border: solid 1px var(--secondardy-50-opacity);
    color: white;
    cursor: cell;
    width: 50%;
    max-width: 5rem;
  }

  span {
    font-size: 0.8rem;
    padding: 5px;
    background-color: white;
    color: black;
    opacity: 0.7;
    border-radius: 10px;
  }

  span:focus {
    background-color: white;
    color: black;
    opacity: 0.7;
    border-radius: 10px;
    border: none;
  }

  span:hover {
    background-color: white;
    color: black;
    opacity: 0.7;
    border-radius: 10px;
  }
`;
