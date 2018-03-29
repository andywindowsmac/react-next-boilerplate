import { ActionType, StateType, Action } from './types';

// IntialState
export const initState: StateType = {
  todos: null,
};

// State
export default (state: StateType = initState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
