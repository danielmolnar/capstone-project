import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Store';
import ImageContainer from '../components/ImageContainer';

export default function Search({
  movie,
  isLarge,
  addToWatchList,
  isOnWatchList,
}) {
  const { searchValue } = useContext(Context);
  const [search, setSearch] = searchValue;

  const baseUrl = 'https://api.themoviedb.org/3/';
  const APIKEY = process.env.REACT_APP_APIKEY;

  useEffect(() => {
    const fetchSearch = async () => {
      const result = await axios(
        `${baseUrl}search/movie?api_key=${APIKEY}&language=en-US&query=Godfather&page=1&include_adult=false`
      );
      setSearch(result.data.results);
      // console.log(result.data);
    };
    fetchSearch();
  }, []);

  console.table(search);

  return (
    <>
      {search.map((movie) => (
        <ImageContainer
          key={movie.id}
          isLarge={isLarge}
          movie={movie}
          addToWatchList={() => addToWatchList(movie)}
          isOnWatchList={() => isOnWatchList(movie)}
        />
      ))}
    </>
  );
}
