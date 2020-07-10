import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import brumafriendimg from '../images/brumafriend.jpeg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import { connect } from 'react-redux'
import Articles from './Articles'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



class ArticleFeed extends React.Component {
  
  render() {
    console.log(this.props)
    const {articles} = this.props;

    return (
      <div><Articles articles={articles}/></div>
      
    )
}}

const mapStateToProps = (state) => {
  console.log(state)
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
