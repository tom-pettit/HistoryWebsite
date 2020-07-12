import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create';
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import { compose } from 'redux'
import EditButton from './ViewArticleEditButton'
import {Link} from 'react-router-dom'
import ShareMenu from './ShareMenu'




class ViewArticleNavbar extends React.Component {
    constructor(props) {
        super(props)
    }

    goBack= () => {
        this.props.history.goBack()
    }

    render() {
        const { auth } = this.props
        const id = this.props.location.pathname.slice(14)

        return (
            <div style={{flexGrow: 1}}>
              <AppBar color='white' position="static" style={{boxShadow: 'none'}}>
                <Toolbar>
                  <Button onClick={this.goBack} color='inherit'>
                    <ArrowBackIosIcon />
                  </Button>
                  <Link to={'/edit_article/'+id} color='black' style={{color: 'rgb(33,33,33'}}><EditButton auth={auth}/></Link>
                  <ShareMenu />
                </Toolbar>
              </AppBar>
            </div>
          );
    }
  
}


export default withRouter(ViewArticleNavbar)