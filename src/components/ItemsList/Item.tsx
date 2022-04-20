import React from 'react';
import { Item as ItemType } from '../../types/types';
import styled from 'styled-components';

const ItemStyled = styled.div`
  text-align: center;
  // transform: rotateX(25deg) rotateY(0deg);
  // transform-style: preserve-3d;
  // &:hover {
  //   transform: rotateX(0deg) rotateY(0deg);
  // }
  transition: all 0.3s;

  &:hover {
    font-size: 1.7rem;
    font-family: roboto-condensed;
    border-radius: 25px;
    border-style: solid;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: yellow;
  font-size: 1.5rem;
  font-family: roboto;
  cursor: pointer;
  padding: 15px;
  // perspective: 117px;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = ({ item, setDetailed }: PropTypes) => {
  return (
    <ItemContainer
      onClick={() => {
        setDetailed(item);
      }}
    >
      <ItemWrapper>
        <ItemStyled>
          {item.name || item.title} ({item.height})
        </ItemStyled>
      </ItemWrapper>
    </ItemContainer>
  );
};
export default Item;

interface PropTypes {
  item: ItemType;
  setDetailed: React.Dispatch<React.SetStateAction<ItemType | null>>;
}
