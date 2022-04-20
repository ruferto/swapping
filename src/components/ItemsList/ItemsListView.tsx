import React from 'react';
import { Title } from '../../App';
import { useLoadResults } from '../../hooks/useLoadResults';
import { Item } from '../../types/types';
import { DetailScreen } from '../Detail';
import styled from 'styled-components';
import ErrorMessage from '../shared/ErrorMessage';
import ItemsList from './ItemsList';
import { useSelector } from 'react-redux';
import { getStateUI } from '../../store/selectors';
import FilterForm from './FilterForm';
import Footer from '../shared/Footer';

const TitleStyle = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-family: swty;
  position: fixed;
  padding: 0.8rem;
  z-index: 2;
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  @media screen and (max-width: 762px) {
    flex-direction: column;
    align-items: center;
    height: 7rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 95%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const StyledButton = styled.button`
  min-height: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-color: white;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  color: white;
  font-family: roboto-condensed;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.3s;
  &:hover {
    color: black;

    background-color: white;
  }
`;
const ElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  margin: 0rem;
`;

const ItemsListView = ({ title }: Title) => {
  const { res } = useLoadResults(title);
  const [detailed, setDetailed] = React.useState<Item | null>(null);
  const { isLoading, error } = useSelector(getStateUI);

  const [sort, setSort] = React.useState('name');

  if (error) return <ErrorMessage />;

  if (detailed)
    return <DetailScreen {...{ item: detailed, setDetailed, title }} />;

  return (
    <>
      <TitleStyle>
        <div>Star Wars People</div>
        <ElementsContainer>
          <StyledButton
            hidden={isLoading}
            onClick={() => {
              if (sort === 'name') setSort('height');
              else setSort('name');
            }}
          >
            Sort by <b>{sort === 'name' ? 'height' : 'name'}</b>
          </StyledButton>
          <FilterForm />
        </ElementsContainer>
      </TitleStyle>
      <ItemsList
        {...{
          res,
          setDetailed,
          sort,
        }}
      />
      <Footer />
    </>
  );
};
export default ItemsListView;
