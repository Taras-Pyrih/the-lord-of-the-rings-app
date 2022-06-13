import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getSearchCharacters = (currentPage, perPage, criterion, searchValue) => {
  const sortingParameterValue = `name:${criterion}`;
  const regexp = new RegExp(`${searchValue}`, 'i');

  return axiosInstance.get(`/character?page=${currentPage}&limit=${perPage}&sort=${sortingParameterValue}&name=${regexp}`);
};