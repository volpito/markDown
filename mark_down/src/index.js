import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import './index.css';


const App = () => (
  
  <div>
    <h1>Hello world!</h1>
    < MarkdownInput />
  </div>

  
);

ReactDOM.render(<App />, document.getElementById('root'));