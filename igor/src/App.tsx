import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <select onChange={onChange}>
            <option value="123">123</option>
            <option value="234">234</option>
            <option value="345">345</option>
            <option value="456">456</option>
            <option value="567">567</option>
            <option value="789">789</option>
          </select>

          <Link to="/">Главная</Link>
          <Link to="/contacts">Контакты</Link>

          <Route path="/" exact={true}>
            123
          </Route>

          <Route path="/contacts">
            234
          </Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
