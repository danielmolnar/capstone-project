import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Tags({
  tags,
  addProfileTag,
  removeProfileTag,
  headline,
}) {
  const [value, setValue] = useState('');
  const [selectedTagIndex, setSelectedTagIndex] = useState(-1);

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addProfileTag(value);
      setValue('');
      setSelectedTagIndex(-1);
    }
    if (event.key === 'Backspace') {
      selectedTagIndex >= 0
        ? removeProfileTag(tags[selectedTagIndex])
        : removeProfileTag(tags[tags.length - 1]);
    }

    if (event.key === 'ArrowLeft') {
      selectedTagIndex <= 0
        ? setSelectedTagIndex(tags.length - 1)
        : setSelectedTagIndex(selectedTagIndex - 1);
    }

    if (event.key === 'ArrowRight') {
      selectedTagIndex === tags.length - 1
        ? setSelectedTagIndex(0)
        : setSelectedTagIndex(selectedTagIndex + 1);
    }
  };

  return (
    <>
      <label htmlFor="tags">{headline}</label>
      <SectionWrapper>
        {tags?.map((tag, index) => (
          <Tag
            data-selected={selectedTagIndex === index ? 'selected' : ''}
            selected={selectedTagIndex === index}
            data-testid="tag"
            key={index + tag}
          >
            {tag}
            <span onClick={() => removeProfileTag(tag)}>&times;</span>
          </Tag>
        ))}
        <input
          data-testid="tag-input"
          type="text"
          name="tags"
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
          placeholder="Type here"
        />
      </SectionWrapper>
    </>
  );
}

Tags.propTypes = {
  headline: PropTypes.string,
  addProfileTag: PropTypes.func,
  removeLastTag: PropTypes.func,
  tags: PropTypes.array,
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
`;

const Tag = styled.span`
  background: ${(prop) => (prop.selected ? 'blue' : 'green')};
  /* background-color: var(--secondary-100); */
  border-radius: 10px;
  color: black;
  font-size: 0.8rem;
  opacity: 0.7;
  padding: 5px;
  :focus {
    background-color: var(--secondary-100);
    border: none;
    border-radius: 10px;
    color: black;
    opacity: 0.7;
  }
  :hover {
    background-color: var(--secondary-100);
    border-radius: 10px;
    color: black;
    font-size: 0.8rem;
    opacity: 0.7;
    padding: 5px;
  }
`;
