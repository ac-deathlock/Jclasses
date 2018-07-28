import {take, put, call} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import MiddlewareTypes from '../Actions/MiddlewareTypes'
import Actions from '../Actions/Creators'
import Types from '../Actions/Types'
import MiddlewareActions from '../Actions/MiddlewareTypeCreators'
import Api from './Api'

function * getQuestions() {
    console.log("#### Fetching Questions ###");
    yield put(Actions.fetchingQuestions());
    let api = yield call(Api.questions);
    if(api){
        console.log(api);
        console.log("#### Fetched Questions ###");
        yield put(Actions.fetchedQuestions(api))
    }
}

function* routeActions(action) {
    switch (action.action.type){
        case Types.FETCH_QUESTIONS:
            console.log("Types.FETCH_QUESTIONS");
            yield * getQuestions(action.action);
            break;
    }
}

export function* watchActions() {
    yield * takeEvery(MiddlewareTypes.MIDDLEWARE_MASTER_ACTION, routeActions)
}