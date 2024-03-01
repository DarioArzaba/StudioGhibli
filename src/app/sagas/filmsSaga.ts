import {takeEvery, call, put} from 'redux-saga/effects';
import {ActionType} from '../actions/actions';
import {getFilmsFailure, getFilmsSuccess} from '../actions/actionCreators';
import {fetchFilmsResponse} from '../../api/ghibliApi';
import Film from '../../models/FilmsResponse';

function* workGetFilms() {
  try {
    const films: Film[] = yield call(fetchFilmsResponse);
    yield put(getFilmsSuccess(films));
  } catch (error) {
    yield put(getFilmsFailure());
  }
}

function* filmsSaga() {
  yield takeEvery(ActionType.GET_FILMS, workGetFilms);
}

export default filmsSaga;
