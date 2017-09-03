import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputText from './components/input-text';

class App extends Component {

  render(props) {
    return (
      <div id="previewer">
        <h1>Markdown Previewer</h1>
        <InputText /> 
      </div>
    );
  }
}

ReactDOM.render(<App />,
document.querySelector('.container'));