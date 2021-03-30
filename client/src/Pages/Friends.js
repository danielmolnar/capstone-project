import React from 'react';
import styled from 'styled-components';

export default function Friends() {
  return (
    <Wrapper>
      <h2>Friends</h2>
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
