import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0rem;
  position: fixed;
  padding: 1rem;
  color: white;
  width: 100wv;
`;
const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
