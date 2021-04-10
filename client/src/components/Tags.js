import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Tags({ tags, addProfileTag, removeProfileTag }) {
  const [value, setValue] = useState('');
  const [selectedTagIndex, setSelectedTagIndex] = useState(-1);

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addProfileTag(value.toUpperCase());
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
      <SectionWrapper>
        {tags?.map((tag, index) => (
          <Tag
            data-selected={selectedTagIndex === index ? 'selected' : ''}
            selected={selectedTagIndex === index}
            data-testid="tag"
            key={index + tag}
          >
            {tag}
            <i onClick={() => removeProfileTag(tag)}>&times;</i>
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
  flex-wrap: wrap;
  background: none;
  border-radius: 5px;
  max-width: 20rem;

  input {
    border: none;
    border-radius: 10px;
    display: inline;
    color: var(--secondary-100);
    width: 80px;
    margin-left: 5px;
    font-size: 0.8rem;
    padding: 5px;
    margin: 0.2rem;
    background: none;
    border: solid var(--secondary-100) 1px;
    cursor: cell;
    outline: none;
  }
`;

const Tag = styled.span`
  background-color: ${(prop) =>
    prop.selected ? 'var(--secondary-100)' : 'var(--secondardy-85-opacity)'};
  color: var(--fontcolor-secondary);
  margin: 0.2rem;
  padding: 5px;
  outline: none;
  font-size: 0.8rem;
  border-radius: 10px;
  box-shadow: var(--boxshadow-light);
  cursor: pointer;

  :focus,
  :hover {
    background-color: var(--secondary-100);
  }

  i {
    margin: 0 3px;
  }
`;
