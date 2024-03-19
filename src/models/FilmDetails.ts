import FilmsResponse from './FilmsResponse';

export default interface FilmDetails extends FilmsResponse {
  director: string;
  rt_score: string;
} // eslint-disable-line semi
