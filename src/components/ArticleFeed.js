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


class ArticleFeed extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="row container" style={{fontFamily: 'Raleway'}}>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh',fontFamily: 'Raleway'}}>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh',fontFamily: 'Raleway'}}>
        <div class="card" style={{boxShadow: 'none', border: 'none',fontFamily: 'Raleway', maxWidth: '800px'}}>
          <div class="card-content black-text" style={{fontFamily: 'Raleway'}}>
            <span class="card-title" style={{fontSize: '2vw', fontWeight: '400'}} ><a href='/view_article' style={{textDecoration: 'none', color: 'black'}}>John Smith</a></span>
            <p style={{width: '100%', fontSize: '1.5vw'}}>A boring article description of an article piers wrote that will be very boring</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
}}

const mapStateToProps = (state) => {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(ArticleFeed)
