import { useState } from 'react';
import styled from 'styled-components';

export default function Tag({ addProfileTag, tags, removeProfileTag }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addProfileTag(value);
      setValue('');
    }
  };

  return (
    <>
      <div>
        Product Tags
        <SectionWrapper>
          {tags.map((tag, index) => (
            <span
              key={index}
              tabIndex="0"
              onKeyDown={(event) =>
                event.key === 'Backspace' && removeProfileTag(tag)
              }
            >
              {tag}
              <i
                // onKeyPress={(e) => e.key === 'Enter' && removeProfileTag(tag)}
                onClick={() => removeProfileTag(tag)}
              >
                &times;
              </i>
            </span>
          ))}

          <input
            // autoFocus
            type="text"
            name="tags"
            onChange={handleChange}
            value={value}
            onKeyDown={handleKeyDown}
          />
        </SectionWrapper>
      </div>
    </>
  );
}

const SectionWrapper = styled.section`
  display: flex;
  /* width: 30 */
  flex-wrap: wrap;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  gap: 5px;

  input {
    border: none;
    display: inline;
    outline: none;
    border-radius: 5px;
    background: none;
    color: white;
    cursor: cell;
  }

  span {
    padding: 5px;
    background-color: black;
    color: white;
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
