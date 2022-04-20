import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { filterAction } from '../../store/actions';
import { getStateUI } from '../../store/selectors';
import closeIcon from '../../assets/img/close-cross-svgrepo-com.svg';

const StyledInput = styled.input`
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border: none;
  border-radius: 50px;

  @media screen and (max-width: 762px) {
    box-sizing: border-box;
    opacity: 0.8;
  }
`;

const StyledResetFilterButton = styled.button`
  color: black;
  background-color: lightgray;
  border-radius: 60px;
  margin-left: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  opacity: 0.8;
  @media screen and (max-width: 762px) {
    color: black;
    background-color: white;
  }
`;
const FilterForm = () => {
  const { isLoading, filter } = useSelector(getStateUI);
  const dispatch = useDispatch();

  const handleInputChange = (event: any) => {
    dispatch(filterAction(event.target.value));
  };

  const resetFilter = () => {
    dispatch(filterAction(''));
  };

  return (
    <div>
      <StyledInput
        value={filter}
        onChange={handleInputChange}
        placeholder="Filter"
        hidden={isLoading}
      />
      <StyledResetFilterButton onClick={resetFilter} hidden={filter === ''}>
        <img src={closeIcon} alt="back" height="12" />
      </StyledResetFilterButton>
    </div>
  );
};

export default FilterForm;
