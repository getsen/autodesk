import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Documentation from './components/Documentation';

export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      lang: 'en'
    };
  }

  render() {
    return (
      <div>
        <Documentation lang={this.state.lang} />
      </div>
    );
  }
}

export default App;
