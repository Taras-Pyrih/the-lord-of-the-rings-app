import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getCharacter = _id => {
  return axiosInstance.get(`/character/${_id}`);
};