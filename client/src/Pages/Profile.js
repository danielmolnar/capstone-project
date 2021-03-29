import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Profile() {
  const [user, setUser] = useLocalStorage('UserProfile', []);

  return (
    <>
      <Wrapper>
        <h2>My Profile</h2>
        {user.favorite_movies.map((movie) => (
          <p>{movie.title}</p>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-left: 20px;
`;
