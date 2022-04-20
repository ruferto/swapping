import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  bottom: 0rem;
  position: fixed;
  padding: 1rem;
  font-size: 0.8rem;
  color: white;
  width: 100vw;

  @media screen and (max-width: 762px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 50%
    );
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      Powered by <a href="https://swapi.dev">Star Wars API</a>
    </StyledFooter>
  );
};

export default Footer;
