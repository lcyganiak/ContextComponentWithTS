import React from 'react';
import logo from './logo.svg';
import ListPosts from './components/ListPosts';
import './App.css';
import ContextComponent from './Store/GlobalStore';
import OnePost from './components/OnePost';

function App() {
  const data: number = new Date().getFullYear()
  return (
    <ContextComponent>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ListPosts></ListPosts>
      <OnePost></OnePost>
    </div>
    </ContextComponent>
  );
}

export default App;
