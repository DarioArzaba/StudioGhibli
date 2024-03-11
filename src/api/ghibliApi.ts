import Film from '../models/FilmsResponse';
import {GhibliApiEndpoints} from './endpoints';
import {axiosApiCall} from '../utils/apiUtils';

export const fetchFilmsResponse = async (): Promise<Film[]> => {
  const response = await axiosApiCall<Film[]>(
    `${GhibliApiEndpoints.getFilms}`,
    {
      method: 'GET',
    },
  );
  return response.data;
};
