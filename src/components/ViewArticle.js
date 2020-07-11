import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import brumafriendimg from '../images/brumafriend.jpeg';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './ViewArticle.css';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      border: 'none',
      boxShadow: 'none',
      marginRight: 0
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      ['@media (max-width: 660px)']: {
          paddingBottom: 0
      },
  
    },
    cover: {
      ['@media (min-width: 860px)']: {
          width: 128,
          height: 128,
          margin: 20,
          marginLeft: 40,
      },
      ['@media (max-width: 860px)']: {
          width: 86,
          height: 86,
          margin: 15,
          marginLeft: 42,
          marginRight: 30
      },
      ['@media (max-width: 660px)']: {
          width: 80,
          height: 80,
          margin: 10,
          marginLeft: 8,
          marginRight: 0
      },
  
    },
    cardtitle: {
      ['@media (min-width: 860px)']: {
          fontSize: 20,
          marginBottom: 10,
          maxWidth: 500
      },
      ['@media (max-width: 860px)']: {
          fontSize: 15,
          marginBottom: 10,
          maxWidth: 300
      },
      ['@media (max-width: 660px)']: {
          fontSize: 10,
          marginBottom: 10,
          maxWidth: 160
  
      },
  
        fontWeight: 'bold',
        fontFamily: 'Raleway',
    },
    carddescription: {
        fontFamily: 'Raleway',
        ['@media (min-width: 860px)']: {
          fontSize: 17,
          width: 612,
          maxWidth: 500,
          paddingTop: 0,
          verticalAlign: 'middle'
        },
        ['@media (max-width: 860px)']: {
          fontSize: 14,
          width: 310,
          paddingTop: 0

        },
        ['@media (max-width: 660px)']: {
          fontSize: 10,
          marginBottom: 0,
          maxWidth: 160,
          paddingTop: 0

      },
    },
    carddescriptionv2: {
        fontFamily: 'Raleway',
        ['@media (min-width: 860px)']: {
          fontSize: 15,
          width: 612,
          maxWidth: 500,
          paddingTop: 10
        },
        ['@media (max-width: 860px)']: {
          fontSize: 12,
          width: 310,
          paddingTop: 10
        },
        ['@media (max-width: 660px)']: {
          fontSize: 8,
          marginBottom: 0,
          maxWidth: 160,
          paddingTop: 10
      },
    },
    box: {
      ['@media (min-width: 860px)']: {
          width: '720px',
          marginLeft: '-360px',
      },
      ['@media (max-width: 860px)']: {
          width: '500px',
          marginLeft: '-250px',
      },
      ['@media (max-width: 660px)']: {
          width: '300px',
          marginLeft: '-150px',
      },
  


  
    },
    icons: {
      ['@media (max-width: 660px)']: {
          fontSize: 'small'
      },
    },
    article: {
        position: 'absolute',
        top: '10%',
        left: '50%'
    },
  }));
  

const ViewArticle = (props) => {
    const classes = useStyles()
    const { article } = props;

    if (article) {
        return(
            <div className="row container" className={classes.article} style={{fontFamily: 'Raleway'}}>
                <div className={classes.box}>
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5" className={classes.cardtitle}>
                                {article.title}
                            </Typography>
                            <Typography className={classes.carddescription}>
                                <LocalOfferIcon fontSize='small' style={{marginRight:'10', verticalAlign: 'middle', color: 'grey'}}/>{article.tags}
                            </Typography>
                            <Typography id='articlebody' className={classes.carddescriptionv2} dangerouslySetInnerHTML={{__html: article.body}}>
                            </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={article.imageurl}
                            title="Live from space album cover"
                        />
                    </Card>
                </div>
            </div>
    )} else {
        return (
            <div className="row container" className={classes.article} style={{fontFamily: 'Raleway'}}>
                <p>Loading article...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const articles = state.firestore.data.articles
    const article = articles ? articles[id] : null
    return {
        article: article
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'articles'}
    ])
)(ViewArticle)