import React, { useState } from 'react';
import styled from 'styled-components';
import CardInfos from '../components/CardInfos';
import Button from '../components/Button';
import PropTypes from 'prop-types';

export default function Overlay({
  movieText,
  movieName,
  release,
  background,
  baseUrl,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => setIsOpen(true);

  return (
    <OverlayStyler>
      <Button clickHandler={clickHandler} />
      <CardInfos
        baseUrl={baseUrl}
        background={background}
        release={release}
        movieText={movieText}
        movieName={movieName}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </OverlayStyler>
  );
}

Overlay.propTypes = {
  movieText: PropTypes.string,
  movieName: PropTypes.string,
  release: PropTypes.string,
  background: PropTypes.string,
  baseUrl: PropTypes.string,
};

const OverlayStyler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  opacity: 0;
  bottom: 0;
`;
