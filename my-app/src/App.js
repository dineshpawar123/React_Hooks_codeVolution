import logo from './logo.svg';
import React from 'react';
import './App.css';
import UseEffectComponent from './components/useEffectComponent';
import UseStateComponent from './components/useStateComponent';
import UseContextComponent from './components/useContextComponent';
import UseReducerHookComponent from './components/useReducerHookComponent';
import ReactMemoDemo from './components/reactMemoDemo';

function App() {
  return (
    <div>
      <hr />
      <div><b>useState Hook</b></div>
      <div>
        <UseStateComponent />
      </div>
      <hr />
      <div><b>useEffect Hook</b></div>
      <div>
        <UseEffectComponent />
      </div>
      <hr />
      <div><b>useContext Hook</b></div>
      <div>
        <UseContextComponent />
      </div>
      <hr />
      <div><b>useReducer Hook</b></div>
      <div>
        <UseReducerHookComponent />
      </div>
      <div><b>reactMemo </b></div>
      <div>
        <ReactMemoDemo />
      </div>
      <div></div>
    </div>
  );
}

export default App;
