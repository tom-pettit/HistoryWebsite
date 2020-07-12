import React from 'react';
import { connect } from 'react-redux'
import Articles from './Articles'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



class ArticleFeed extends React.Component {
  
  render() {
    const {articles} = this.props;

    return (
      <div><Articles articles={articles}/></div>
      
    )
}}

const mapStateToProps = (state) => {
  return {
    articles: state.firestore.ordered.articles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'articles'}
  ])
)(ArticleFeed)
