// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creators
const increment = () => {
  return {
    type: INCREMENT
  };
};

const decrement = () => {
  return {
    type: DECREMENT
  };
};

// Initial State
const initialState = {
  count: 0
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export {
  increment,
  decrement,
  counterReducer
};
