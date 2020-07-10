import React from 'react';
import Home from './components/Home'
import ArticleFeed from './components/ArticleFeed'
import SignIn from './components/SignIn'
import CreateArticle from './components/CreateArticle'
import ViewArticle from './components/ViewArticle.js'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/create_article' component={CreateArticle}/>
        <Route path='/view_article/:id' component={ViewArticle}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
