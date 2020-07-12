import React from 'react';
import Home from './components/home/Home'
import ArticleFeed from './components/articles/feed/ArticleFeed'
import CreateArticle from './components/signin/SignIn'
import ViewArticle from './components/articles/view/ViewArticle.js'
import EditArticle from './components/articles/edit/EditArticle'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/create_article' component={CreateArticle}/>
        <Route path='/view_article/:id' component={ViewArticle}/>
        <Route path='/edit_article/:id' component={EditArticle}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
