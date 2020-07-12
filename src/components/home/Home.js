import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import brumafriendimg from '../../images/brumafriend.jpeg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import ArticleFeed from '../articles/feed/ArticleFeed'
import { connect } from 'react-redux'


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
        width: 140,
        height: 140,
        margin: 20,
        marginLeft: 40,
    },
    ['@media (max-width: 860px)']: {
        width: 280,
        margin: 15,
        marginLeft: 42,
        marginRight: 30
    },
    ['@media (max-width: 660px)']: {
        width: 120,
        height: 120,
        margin: 10,
        marginLeft: 8,
        marginRight: 0
    },

    borderRadius: '50%',
  },
  cardtitle: {
    ['@media (min-width: 860px)']: {
        fontSize: 30,
        marginBottom: 10
    },
    ['@media (max-width: 860px)']: {
        fontSize: 20,
        marginBottom: 10
    },
    ['@media (max-width: 660px)']: {
        fontSize: 20,
        marginBottom: 10

    },

      fontWeight: 'bold',
      fontFamily: 'Raleway',
  },
  carddescription: {
      fontFamily: 'Raleway',
      ['@media (min-width: 860px)']: {
        fontSize: 15,
        width: 612,
      },
      ['@media (max-width: 860px)']: {
        fontSize: 15,
        width: 310,
      },
      ['@media (max-width: 660px)']: {
        fontSize: 11,
        marginBottom: 0,
        width: 160
    },
  },
  box: {
    ['@media (min-width: 860px)']: {
        width: '860px',
        marginLeft: '-430px',
    },
    ['@media (max-width: 860px)']: {
        width: '560px',
        marginLeft: '-280px',
    },
    ['@media (max-width: 660px)']: {
        width: '350px',
        marginLeft: '-175px',
    },


    position: 'absolute',
    left: '50%',
    top: '10%',

  },
  icons: {
    ['@media (max-width: 660px)']: {
        fontSize: 'small'
    },
  },
}));


const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.box}>
          <Card className={classes.root}>
              <div className={classes.details}>
                  <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" className={classes.cardtitle}>
                      brumafriend
                  </Typography>
                  <Typography className={classes.carddescription}>
                      Interested in History. Specifically, Tudor History and the Middle Ages in England.
                  </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                      <IconButton href='https://uk.linkedin.com/in/piers-mucklejohn-4a97bb184' target='_blank'>
                          <LinkedInIcon className={classes.icons}/>
                      </IconButton>
                      <IconButton href='https://twitter.com/BrumafriendHist' target='_blank'>
                          <TwitterIcon className={classes.icons}/>
                      </IconButton>
                      <IconButton href='/create_article'>
                          <AddIcon className={classes.icons}/>
                      </IconButton>
                  </CardActions>
              </div>
              <CardMedia
                  className={classes.cover}
                  image={brumafriendimg}
                  title="Live from space album cover"
              />
          
          </Card>
          
      </div>
      <br></br>
      <div style={{position: 'absolute', top: '40%', left: '50%'}}><ArticleFeed /></div>
      
    </div>
  );
}

export default Home