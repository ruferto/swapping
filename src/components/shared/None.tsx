import React from 'react';
import styled from 'styled-components';

const StyledNone = styled.div`
  font-family: roboto-condensed;
  font-size: 2rem;
  color: palered;
  padding-top: 7rem;
  text-align: center;
`;

const None = () => {
  return (
    <StyledNone>
      Oops, something went wrong retrieving characters...
      <br />
      Try <a href="/">reloading</a> after a seconds
    </StyledNone>
  );
};

export default None;
