import { combineReducers } from 'redux';
import { HELLOWORLD } from './../actions';

const initialState = {
  name: null,
};

export const helloWorld = (state = initialState, action) => {
  switch (action.type) {
    case HELLOWORLD.SAYHI: {
      return {...state, name: action.name};
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({ helloWorld });
