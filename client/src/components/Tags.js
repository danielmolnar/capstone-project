import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Tags({
  tags,
  addProfileTag,
  removeLastTag,
  removeProfileTag,
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
  addProfileTag: PropTypes.func,
  removeLastTag: PropTypes.func,
  removeProfileTag: PropTypes.func,
  tags: PropTypes.array.isRequired,
};

const SectionWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border: none;
  border-radius: 5px;
  color: var(--secondary-100);
  cursor: pointer;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  width: 100%;

  p {
    margin: 0;
  }

  input {
    background: none;
    border: none;
    border: solid 1px var(--secondardy-50-opacity);
    border-radius: 5px;
    color: white;
    cursor: cell;
    display: inline;
    max-width: 5rem;
    outline: none;
    width: 50%;
  }

  span {
    background-color: var(--secondary-100);
    border-radius: 10px;
    color: black;
    font-size: 0.8rem;
    opacity: 0.7;
    padding: 5px;
  }

  span:focus {
    background-color: var(--secondary-100);
    border: none;
    border-radius: 10px;
    color: black;
    opacity: 0.7;
  }

  span:hover {
    background-color: var(--secondary-100);
    border-radius: 10px;
    color: black;
    opacity: 0.7;
  }
`;
