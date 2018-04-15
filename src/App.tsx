import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IHello {
  target: HTMLInputElement;
}

class App extends React.Component {
  public state = { hello: '' };

  public handleChange = (e: IHello) => {
    this.setState({
      hello: e.target.value
    });
  };

  public handleHello = (e: any) => {
    console.log('aewfewf');
  };

  public render() {
    const a: string = 'hello';
    return (
      <div className="App">
        {a}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input
          type="text"
          value={this.state.hello}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
