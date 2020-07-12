import React from 'react'
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { connect } from 'react-redux';


const EditButton = (props) => {
    const {auth} = props
    const editButton = auth.uid ? <Button href=''color="inherit"><CreateIcon color='black' /></Button> : null
    return (
        <div>{editButton}</div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(EditButton)