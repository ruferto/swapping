import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { BackButton } from '.';
import { resetErrorAction } from '../../store/actions';
import { getStateUI } from '../../store/selectors';

const Error = styled.div`
  color: red;
  font-size: 2.5rem;
  margin: 20;
  font-family: roboto-condensed;
  position: fixed;
  text-align: center;
  width: 100%;
  top: 30vh;
`;

const ErrorMessage = () => {
  const { error } = useSelector(getStateUI);
  const dispatch = useDispatch();
  console.log(JSON.stringify(error.message));
  const resetError = () => {
    dispatch(resetErrorAction());
  };
  return (
    <Error>
      Error: {`${error.message}`}
      <br />
      <div
        style={{ color: 'yellow', fontSize: '2rem', cursor: 'pointer' }}
        onClick={resetError}
      >
        <BackButton />
        Home
      </div>
    </Error>
  );
};
export default ErrorMessage;
