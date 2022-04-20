import React from 'react';
import { Item } from '../../types/types';
import { BackButton } from '../shared';
import styled from 'styled-components';
import axios from 'axios';
import DetailView from './DetailView';

export const ButtonStyled = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  top: 20;
  left: 20;
  position: fixed;
`;

const DetailScreen = ({ item, setDetailed }: PropTypes) => {
  const source = axios.CancelToken.source();
  const cancelToken = source.token;
  return (
    <div>
      <ButtonStyled
        onClick={() => {
          setDetailed(null);
          source.cancel();
        }}
      >
        <BackButton />
      </ButtonStyled>
      <DetailView {...{ item, cancelToken }} />
    </div>
  );
};

type PropTypes = {
  item: Item;
  setDetailed: React.Dispatch<React.SetStateAction<Item | null>>;
  title: string;
};
export default DetailScreen;
