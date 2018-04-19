import { createAction, handleActions } from 'redux-actions';

const LOADING = 'category/LOADING';
const RESPONSE = 'category/RESPONSE';
const ERROR = 'category/ERROR';

export const actionCreators = {
  error: createAction(ERROR),
  load: createAction(LOADING),
  response: createAction(RESPONSE)
};

export interface CategoryState {
  result: boolean;
}

// 모듈의 초기 상태를 정의합니다.
const initialState: CategoryState = {
  result: false
};

// 내보냄
export default handleActions<CategoryState>(
  {
    [LOADING]: state => ({ result: true }),
    [RESPONSE]: state => ({ result: false }),
    [ERROR]: state => ({ result: true })
  },
  initialState
);
