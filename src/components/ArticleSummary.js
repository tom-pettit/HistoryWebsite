import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import brumafriendimg from '../images/brumafriend.jpeg';


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
          fontSize: 15,
          width: 612,
          maxWidth: 500
        },
        ['@media (max-width: 860px)']: {
          fontSize: 12,
          width: 310,
        },
        ['@media (max-width: 660px)']: {
          fontSize: 8,
          marginBottom: 0,
          maxWidth: 160
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
        position: 'relative'
    }
  }));
  

const ArticleSummary = ({article}) => {
    const classes = useStyles()
    return (
        <div className="row container" className={classes.article} style={{fontFamily: 'Raleway'}}>
            <div className={classes.box}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5" className={classes.cardtitle}>
                            {article.title}
                        </Typography>
                        <Typography className={classes.carddescription}>
                            {article.tags}
                        </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={brumafriendimg}
                        title="Live from space album cover"
                    />
                </Card>
            </div>
        </div>
    )
}

export default ArticleSummary