import Types from './Types'


const fetchingQuestions = ()=> {
    return({
        type: Types.FETCHING_QUESTION_LIST
    })
};

const fetchedQuestions = (result) => {
    return({
        type: Types.FETCHED_QUESTION_LIST,
        data: result
    })
};

const fetchQuestions = () => {
  return({
      type: Types.FETCH_QUESTIONS
  })
};
export default {
    fetchedQuestions,
    fetchingQuestions,
    fetchQuestions
}