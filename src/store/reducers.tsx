import {
  DATA_REQUEST,
  DATA_FAILURE,
  DATA_SUCCESS,
  RESET_ERROR,
  CHANGE_FILTER,
} from './types';
import { preLoadedState } from '..';

export function data(state = preLoadedState.data, action: any) {
  switch (action.type) {
    case DATA_REQUEST:
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

export function ui(state = preLoadedState.ui, action: any) {
  switch (action.type) {
    case DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case DATA_SUCCESS:
      return { ...state, isLoading: false };
    case DATA_REQUEST:
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
