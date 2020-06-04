import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Posts from './Component/Posts';
import Albums from './Component/Albums';
import Comments from './Component/Comments';
import Photos from './Component/Photos';
import Todos from './Component/Todos';
import Users from './Component/Users';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/todos" component={Todos} />
      </div>
    </BrowserRouter>
  );
}

export default App;
