import * as actionTypes from "../actions/actionTypes";

const intialState = {
  results: []
};

const deleteResult = (state, action) => {
  const newArray = state.results.filter(
    result => action.resultID !== result.id
  );

  return {
    ...state,
    results: newArray
  };
};

const resultReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result
        })
      };
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }
  return state;
};
export default resultReducer;
