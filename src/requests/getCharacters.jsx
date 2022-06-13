import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getCharacters = (currentPage, perPage, criterion) => {
  const sortingParameterValue = `name:${criterion}`;
  
  return axiosInstance.get(`/character?page=${currentPage}&limit=${perPage}&sort=${sortingParameterValue}`);
};