import axios, {AxiosRequestConfig} from 'axios';

interface GenericAxiosApiResponse<T> {
  data: T;
  status: number; // HTTP status handling
}

export async function axiosApiCall<T>(
  url: string,
  config: AxiosRequestConfig,
): Promise<GenericAxiosApiResponse<T>> {
  try {
    const response = await axios.get(url, config);
    const data: T = await response.data;
    if (response.status < 200 || response.status >= 300) {
      console.log('HTTP ERROR: ', response.status);
    }
    return {data, status: response.status};
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
}

interface GenericFetchApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export async function fetchApiCall<T>(
  url: string,
  config: RequestInit,
): Promise<GenericFetchApiResponse<T>> {
  try {
    const response = await fetch(url, config);
    const data: T = await response.json();
    if (!response.ok) {
      console.log('HTTP ERROR: ', response.statusText);
    }
    return {data, status: response.status, statusText: response.statusText};
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
}
