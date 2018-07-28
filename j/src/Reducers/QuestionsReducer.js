import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import {createReducer} from 'reduxsauce'

export const INITIAL_STATE = Immutable({
    isFetching: true,
    data: null
});

const fetchingQuestionsList = (state, action) => {
    console.log("#### QUESTIONS REDUCER - FETCHING QUESTIONS ####");
    return state.merge({
        isFetching: true,
        data: {}
    });
};

const fetchedQuestionsList = (state, action) => {
    return state.merge({
        isFetching: false,
        data: (action.data? action.data: {})
    });

};

const ACTION_HANDLERS = {
    [Types.FETCHING_QUESTION_LIST]: fetchingQuestionsList,
    [Types.FETCHED_QUESTION_LIST]: fetchedQuestionsList
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);