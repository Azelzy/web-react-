import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Pastikan loader memenuhi tinggi layar */
  width: 100vw;

  .loader {
    width: 150px; /* Perbesar ukuran loader */
    height: 150px; /* Pastikan proporsional */
    background:
      linear-gradient(#ff4500 0 0) left/50% 100% no-repeat,
      conic-gradient(
        from -90deg at 32px 9.47px,
        #d5461b 135deg,
        #521c0d 0 270deg,
        #ff9c45 0
      );
    background-blend-mode: multiply;
    -webkit-mask: linear-gradient(
        to bottom right,
        #0000 8px,
        #000 0 52px,
        #0000 0
      ),
      conic-gradient(from -90deg at right 6px bottom 6px, #000 90deg, #0000 0);
    mask: linear-gradient(to bottom right, #0000 8px, #000 0 52px, #0000 0),
      conic-gradient(from -90deg at right 6px bottom 6px, #000 90deg, #0000 0);
    background-size: 50% 50%;
    -webkit-mask-size: 50% 50%;
    mask-size: 50% 50%;
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
    animation: l9 1.8s infinite cubic-bezier(0.5, 0.2, 0.5, 1);
    box-shadow: 0 0 25px rgba(255, 69, 0, 0.8);
    transform: perspective(1000px) rotateY(15deg);
  }

  @keyframes l9 {
    0% {
      background-position:
        0% 0%,
        0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1);
      box-shadow: 0 0 25px rgba(255, 69, 0, 0.8);
    }
    25% {
      background-position:
        100% 0%,
        0 0;
    }
    50% {
      background-position:
        100% 100%,
        0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1.1);
      box-shadow: 0 0 35px rgba(255, 69, 0, 1);
    }
    75% {
      background-position:
        0% 100%,
        0 0;
    }
    100% {
      background-position:
        0% 0%,
        0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1);
      box-shadow: 0 0 25px rgba(255, 69, 0, 0.8);
    }
  }
`;

export default Loader;