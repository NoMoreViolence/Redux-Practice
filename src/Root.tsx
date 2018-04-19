import * as React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

// 스토어로 감싸기 => 리덕스활동 영역
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
