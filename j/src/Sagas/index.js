import {fork} from 'redux-saga/effects'
import {watchActions} from './MasterSaga'

export default function* root(){
    yield fork(watchActions)
}