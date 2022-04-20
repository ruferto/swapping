import React from 'react';
import styled from 'styled-components';
import { firstLetterToUppercase } from '../../utils/utils';
import { Item } from '../../types/types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const DetailStyled = styled.div`
  font-size: 1.5rem;
  font-family: roboto;
  color: lightblue;
  margin: 3rem;
`;
const Property = styled.div`
  margin: 1rem;
`;

const DetailView = ({ item }: PropTypes) => {
  return (
    <div>
      <Wrapper>
        <DetailStyled>
          {Object.entries(item!).map((item2) => {
            const [property, value] = item2;
            const isShown =
              property === 'height' ||
              property === 'name' ||
              (property === 'gender' && value !== 'n/a') ||
              (property === 'hair_color' && value !== 'n/a');
            const isNumber = typeof value === 'number';
            const isArray = Array.isArray(value);
            const isUrl =
              value && !isArray && !isNumber ? value.match(/https:\//) : null;

            // if (isNumber) {
            //   return (
            //     <Property key={property}>
            //       {firstLetterToUppercase(property)}: <strong>{value}</strong>
            //     </Property>
            //   );
            // }

            return (
              isShown &&
              value &&
              !isArray &&
              !isUrl && (
                <Property key={property}>
                  {`${firstLetterToUppercase(property)}: `}
                  <strong>{`${firstLetterToUppercase(value)}`}</strong>
                </Property>
              )
            );
          })}
        </DetailStyled>
      </Wrapper>
    </div>
  );
};

export default DetailView;

interface PropTypes {
  item: Item;
}
