import React from 'react';
import Home from './components/home/Home'
import ArticleFeed from './components/articles/ArticleFeed'
import SignIn from './components/signin/SignIn'
import CreateArticle from './components/articles/CreateArticle'
import ViewArticle from './components/articles/ViewArticle.js'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/sign_in' component={SignIn}/>
        <Route path='/view_article/:id' component={ViewArticle}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
