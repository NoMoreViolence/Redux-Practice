import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 불러옴
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css'; // 어디에서나 적용되는 글로벌한 CSS
import registerServiceWorker from './registerServiceWorker'; // PWA
import Root from './Root'; // 루트에서 불러온 걸 돔에 뿌려줌

// PWA 적용과 함께 Real 돔으로
ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
