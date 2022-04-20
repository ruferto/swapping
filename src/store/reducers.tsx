import {
  ADD_SECTION_REQUEST,
  ADD_SECTION_SUCCESS,
  DATA_REQUEST,
  DATA_FAILURE,
  DATA_SUCCESS,
  ADD_SINGLE_SUCCESS,
  RESET_ERROR,
  CHANGE_FILTER,
} from './types';
import { preLoadedState } from '..';
import { Item } from '../types/types';

export function data(state = preLoadedState.data, action: any) {
  switch (action.type) {
    case DATA_REQUEST:
      console.log('Reducer data');
      return state;
    case DATA_FAILURE:
    case DATA_SUCCESS:
      return {
        ...state,
        [action.payload.section]: {
          loaded: !action.payload.next ? true : false,
          next: action.payload.next,
          data: [[action.payload.results]],
        },
      };

    default:
      return state;
  }
}

export function dataDetails(state = preLoadedState.dataDetails, action: any) {
  switch (action.type) {
    case ADD_SINGLE_SUCCESS:
      if (state.find((a: Item) => a.url === action.payload.url)) return state;
      return [...state, action.payload];

    default:
      return state;
  }
}

export function ui(state = preLoadedState.ui, action: any) {
  switch (action.type) {
    case DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case ADD_SINGLE_SUCCESS:
    case DATA_SUCCESS:
    case ADD_SECTION_SUCCESS:
      return { ...state, isLoading: false };
    case DATA_REQUEST:
    case ADD_SECTION_REQUEST:
      return { ...state, isLoading: true };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}
