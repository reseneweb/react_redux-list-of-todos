import { Status } from '../types/Status';

type SetStatusAction = {
  type: 'filter/SET_STATUS';
  payload: Status;
};

type SetQueryAction = {
  type: 'filter/SET_QUERY';
  payload: string;
};

const setStatus = (status: Status): SetStatusAction => ({
  type: 'filter/SET_STATUS',
  payload: status,
});

const setQuery = (query: string): SetQueryAction => ({
  type: 'filter/SET_QUERY',
  payload: query,
});

export const actions = { setQuery, setStatus };

type State = {
  query: string,
  status: string,
};
type Action = SetQueryAction | SetStatusAction;

const startValue = {
  query: '',
  status: 'all',
};

const filterReducer = (
  state: State = startValue,
  action: Action,
): State => {
  switch (action.type) {
    case 'filter/SET_STATUS':
      return { ...state, status: action.payload };
    case 'filter/SET_QUERY':
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
