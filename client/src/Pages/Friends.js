import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Friends(
  isLarge,
  isFavorite,
  isOnWatchList,
  addToWatchList,
  addToFavorites
) {
  const apiServerURL = 'http://localhost:4000/api';
  const [friends, setFriends] = useLocalStorage('Testing', []);

  useEffect(() => {
    fetch(apiServerURL + '/users')
      .then((result) => result.json())
      .then((friends) => setFriends(friends))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <Wrapper>
      <>
        <button>
          onClick={() => console.log(friends[0].favorites.length)}
        </button>
      </>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 25px;
`;

//   return isLoading ? (
//     <>
//       <HeadLineStyler>{title}</HeadLineStyler>
//       <Spinner isLarge={isLarge} />
//     </>
//   ) : (
//     <>
//       <HeadLineStyler>{title}</HeadLineStyler>
//       <Wrapper>
//         <MovieWrapper>
//           {movies.map((movie) => (
//             <ImageContainer
//               movie={movie}
//               key={movie.id}
//               isLarge={isLarge}
//               isLoading={isLoading}
//               isFavorite={() => isFavorite(movie)}
//               isOnWatchList={() => isOnWatchList(movie)}
//               addToWatchList={() => addToWatchList(movie)}
//               addToFavorites={() => addToFavorites(movie)}
//             />
//           ))}
//         </MovieWrapper>
//       </Wrapper>
//     </>
//   );
// }
// const Wrapper = styled.div`
//   margin-left: 25px;
// `;

// const MovieWrapper = styled.div`
//   display: flex;
//   overflow-x: scroll;
//   overflow-y: hidden;
//   padding: 20px;
//   scrollbar-width: none;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

// const HeadLineStyler = styled.h2`
//   margin-left: 20px;
// `;
