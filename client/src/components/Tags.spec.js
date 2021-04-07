import { fireEvent, render } from '@testing-library/react';
import Tags from './Tags';

describe('<Tags /> component', () => {
  it('should display a headline', () => {
    const { getByText } = render(<Tags headline="This is the Headline" />);
    expect(getByText(/headline/i)).toBeInTheDocument();
  });

  it('should show three tags when they are passed as props', () => {
    const tags = ['one', 'two', 'three'];
    const { getAllByTestId } = render(<Tags tags={tags} />);
    expect(getAllByTestId('tag')).toHaveLength(3);
  });

  it('should return a tag after user input', () => {
    const handleUpdateTags = jest.fn((tag) => {});
    const { getByTestId } = render(<Tags addProfileTag={handleUpdateTags} />);
    const inputField = getByTestId('tag-input');
    fireEvent.change(inputField, { target: { value: 'One' } });
    fireEvent.keyDown(inputField, { key: 'Enter' });
    expect(handleUpdateTags).toHaveBeenCalled();
  });

  it('should delete the last tag when backspace is pressed', () => {
    const tags = ['one', 'two', 'three'];
    const handleDeleteTag = jest.fn((tag) => {});
    const { getByTestId } = render(
      <Tags tags={tags} removeProfileTag={handleDeleteTag} />
    );
    const inputField = getByTestId('tag-input');
    fireEvent.keyDown(inputField, { key: 'Backspace' });
    expect(handleDeleteTag).toHaveBeenCalledWith('three');
  });

  it('should select the last tag when left arrow is pressed', () => {
    const tags = ['one', 'two', 'three'];
    const { getByTestId, getAllByTestId } = render(<Tags tags={tags} />);
    const inputField = getByTestId('tag-input');
    fireEvent.keyDown(inputField, { key: 'ArrowLeft' });
    const tagElements = getAllByTestId('tag');
    const lastTagElement = tagElements[tagElements.length - 1];
    expect(lastTagElement).toHaveAttribute('data-selected', 'selected');
  });
});
