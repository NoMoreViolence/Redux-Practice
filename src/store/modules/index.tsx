import { combineReducers } from 'redux';
import category, { CategoryState } from './Category';

export default combineReducers({
  category
});

// 스토어의 상태 타입 정의
export interface StoreState {
  category: CategoryState;
}
