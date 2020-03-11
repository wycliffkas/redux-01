import * as actionTypes from "../actions";

const intialState = {
  results: []
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
      const newArray = state.results.filter(
        result => action.resultID !== result.id
      );
      return {
        ...state,
        results: newArray
      };
  }
  return state;
};
export default resultReducer;
