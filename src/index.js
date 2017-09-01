import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputText from './components/input-text';
import OutputText from './components/output-text';

class App extends Component {

  render(props) {
    return (
      <div>
        <InputText /> 
        <OutputText /> 
      </div>
    );
  }
}

ReactDOM.render(<App />,
document.querySelector('.container'));