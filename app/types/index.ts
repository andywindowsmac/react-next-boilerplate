import {
  StepAction,
  StepStateType,
  UserAction,
  UserData,
} from '../ducks/types';

interface NextPropsUrl {
  asPath: string;
  back: Function;
  push: (url: string, as: any) => void;
  pathname: string;
}

type ReduxActionType = StepAction | UserAction;
type ReduxDispatchType = (action: ReduxActionType) => void;
type ReduxStateType = {
  user: UserData;
  state: StepStateType;
};

export { NextPropsUrl, ReduxActionType, ReduxDispatchType, ReduxStateType };
