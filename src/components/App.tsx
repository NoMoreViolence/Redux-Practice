import * as React from 'react';
import AppTemplate from './AppTemplate';
import HeaderContainer from './../containers/Header/HeaderContainer';
class App extends React.Component {
  public render() {
    return (
      <AppTemplate
        Header={<HeaderContainer />}
        // Main={<MainContatiner />}
        // Login={<LoginContainer />}
        // Admin={<AdminContainer />}
        // CategoryView={<CategoryViewPage />}
        // PostView={<PostViewPage />}
      />
    );
  }
}

export default App;
