import React from 'react';
import Profile from './components/Home'
import ArticleFeed from './components/ArticleFeed'
import AddArticle from './components/AddArticle'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Profile}/>
        <Route path='/add_article' component={AddArticle}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
