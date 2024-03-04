import {all} from 'redux-saga/effects';
import filmsSaga from './filmsSaga';

function* rootSaga() {
  yield all([filmsSaga()]);
}

export default rootSaga;
