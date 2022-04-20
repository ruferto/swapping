import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firstLoadAction } from '../store/actions';
import { getStateData } from '../store/selectors';
import { Item } from '../types/types';

export const useLoadResults = (kind: string) => {
  const [res, setRes] = React.useState<Item[]>([]);
  const dispatch = useDispatch();

  let sectionData = useSelector(getStateData);

  const { loaded, next, data } = sectionData[kind];

  const loadMore = (): void => {
    if (next) {
      dispatch(firstLoadAction(next, kind, setRes));
    }
  };

  React.useEffect(() => {
    if (!loaded) {
      loadMore();
    } else {
      setRes(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    res,
    setRes,
    next,
    loadMore,
  };
};
