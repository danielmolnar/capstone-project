import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';

export default function Overlay({ movie, movieText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OverlayStyler>
      <button onClick={() => setIsOpen(true)}>Movie Info</button>
      <Modal
        movieText={movieText}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </OverlayStyler>
  );
}

const OverlayStyler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  opacity: 0;
  top: 0;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  transition: 450ms;

  p {
    font-size: 12px;
    color: white;
  }
`;
