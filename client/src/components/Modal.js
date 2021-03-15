import React from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';

export default function Modal({
  movie,
  open,
  onClose,
  movieOverview,
  movieText,
}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <OverlayStyler></OverlayStyler>
      <ModalStyler>
        <button onClick={onClose}>close modal</button>
        <p>{movieText}</p>
      </ModalStyler>
    </>,
    document.getElementById('portal')
  );
}

const ModalStyler = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px;
  z-index: 1000;
  p {
    color: black;
  }
`;

const OverlayStyler = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
