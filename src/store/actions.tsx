import {
  DATA_SUCCESS,
  DATA_REQUEST,
  DATA_FAILURE,
  RESET_ERROR,
  CHANGE_FILTER,
} from './types';
import { apiCall } from '../api/apiCalls';
import { Item } from '../types/types';

export const dataSuccess = (
  section: string,
  results: Item[],
  next: string | null,
) => {
  return {
    type: DATA_SUCCESS,
    payload: { section, results, next },
  };
};

export const dataFailure = (error: Error) => {
  return {
    type: DATA_FAILURE,
    payload: error,
  };
};

export const dataRequest = () => {
  return {
    type: DATA_REQUEST,
  };
};

export const dataAction = (
  section: string,
  results: Item[],
  next: string | null,
) => {
  return async function (dispatch: any, getState: any) {
    dispatch(dataRequest);
    try {
      dispatch(dataSuccess(section, results, next));
    } catch (err) {
      console.log(err);
    }
  };
};

export const firstLoadAction = (
  next: string | null,
  kind: string,
  setRes: React.Dispatch<React.SetStateAction<Item[]>>,
) => {
  return async function (dispatch: any, getState: any) {
    dispatch(dataRequest());
    try {
      const newResults = await apiCall(next || kind, kind);
      const { count } = newResults;
      const num = count % 10 === 0 ? count / 10 : count / 10 + 1;

      const promises = [];
      const newItems: Item[] = newResults.results;
      if (num < 3) {
        setRes(newItems);
        dispatch(dataSuccess(kind, newItems, null));
      }
      for (let i = 2; i < num; i++) {
        promises.push(apiCall(`${kind}/?page=${i}`, kind));
      }
      Promise.all(promises).then((resolved) => {
        resolved.forEach((items) => {
          items.results.forEach((item) => {
            newItems.push(item);
          });
          setRes(newItems);
          dispatch(dataSuccess(kind, newItems, null));
        });
      });
    } catch (err: any) {
      console.log(err);
      dispatch(dataFailure(err));
    }
  };
};

export const resetErrorAction = () => {
  return {
    type: RESET_ERROR,
  };
};

export const filterAction = (filter: string) => {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
};
