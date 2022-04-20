import { GenericResultsType } from '../types/types';
import client from './client';

export const apiCall = async (
  next: string,
  what: string,
): Promise<GenericResultsType> => {
  return await client.get(next ? next : what);
};

export const getSections = async () => {
  const sections = Object.entries(await client.get('/')).map((i) => [i]);
  return sections;
};
