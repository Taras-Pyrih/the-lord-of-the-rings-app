import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getCharacters = (currentPage, perPage) => {
  return axiosInstance.get(`/character?page=${currentPage}&limit=${perPage}&sort=name:asc`);
};