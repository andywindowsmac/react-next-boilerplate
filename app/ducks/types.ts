enum ActionType {
  'ADD_TODO' = 'ADD_TODO',
  'REMOVE_TODO' = 'REMOVE_TODO',
  'TOGGLE_TODO' = 'TOGGLE_TODO',
}

interface TodoType {
  label: string;
  completed: false;
}

interface StateType {
  todos: Array<TodoType> | null;
}

interface Action {
  type: ActionType;
  payload: any;
}

export { ActionType, StateType, Action };
