import * as React from 'react';
import { Container } from 'reactstrap';

// 인터페이스 정의
interface Pages {
  Header: JSX.Element;
  // Main: JSX.Element;
  // Login: JSX.Element;
  // Admin: JSX.Element;
  // CategoryView: JSX.Element;
  // PostView: JSX.Element;
}

const AppTemplate = (Target: Pages) => (
  <Container className="App">
    <div id="header">{Target.Header}</div>
    {/*<div id="main">{Target.Main}</div>*/}
    {/*<div id="category-view">{Target.Admin}</div>*/}
    {/*<div id="post-view">{Target.Admin}</div>*/}
    {/*<div id="login">{Target.Login}</div>*/}
    {/*<div id="admin">{Target.Admin}</div>*/}
  </Container>
);

export default AppTemplate;
