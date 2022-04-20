import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { filterAction } from '../../store/actions';
import { getStateUI } from '../../store/selectors';
import { Item as ItemType } from '../../types/types';
import ErrorMessage from '../shared/ErrorMessage';
import None from '../shared/None';
import SmallLoader from '../shared/SmallLoader';
import Item from './Item';

const StyledList = styled.div`
  padding-top: 3rem;
  @media screen and (max-width: 762px) {
    padding-top: 6rem;
  }
`;
const CenterContainer = styled.div`
  text-align: center;
  color: white;
  padding-bottom: 3rem;
`;
const CleanButton = styled.div`
  cursor: pointer;
  margin-top: 1rem;
  font-family: roboto-condensed;
  text-decoration: underline;
`;

const ItemsList = ({ res, sort, setDetailed }: PropTypes) => {
  const { isLoading, error, filter } = useSelector(getStateUI);
  const dispatch = useDispatch();

  let numFiltered = 0;

  if (error) return <ErrorMessage />;

  if (res.length === 0 && !isLoading) return <None />;
  return (
    <>
      <StyledList>
        {res
          .sort((a, b) => {
            if (sort === 'height') {
              if (a.height.toString() === 'unknown') a = { ...a, height: 0 };
              return a.height - b.height;
            } else {
              if (a.name! < b.name!) return -1;
              else if (a.name > b.name) return 1;
              else return 0;
            }
          })
          .map((item: ItemType) => {
            if (
              (item.name &&
                item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1) ||
              (item.title &&
                item.title?.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
            ) {
              numFiltered++;
              return <Item {...{ item, setDetailed }} key={item.name} />;
            } else return null;
          })}
        <CenterContainer>
          {isLoading && <SmallLoader />}

          {filter !== '' && (
            <>
              <div style={{ marginTop: '1rem' }}>
                There's {numFiltered} result{numFiltered === 1 ? '' : 's'}{' '}
                matching filter of {res.length}
              </div>
              <CleanButton
                onClick={() => {
                  dispatch(filterAction(''));
                }}
              >
                Remove filter
              </CleanButton>
            </>
          )}
        </CenterContainer>
      </StyledList>
    </>
  );
};
export default ItemsList;

interface PropTypes {
  res: ItemType[];
  setDetailed: React.Dispatch<React.SetStateAction<ItemType | null>>;
  sort: string;
}
