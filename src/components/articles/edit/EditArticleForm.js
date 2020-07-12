import React from 'react'
import { connect } from 'react-redux'
import { editArticle } from '../../../store/actions/articleActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class EditArticleForm extends React.Component {

    state = {
        title: this.props.article.title,
        imageurl: this.props.article.imageurl,
        tags: this.props.article.tags,
        body: this.props.article.body,
        prev_id: this.props.id
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editArticle(this.state)
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input id='title' onChange={this.handleChange} defaultValue={this.props.article.title}></input>
                <input id='tags' onChange={this.handleChange} defaultValue={this.props.article.tags}></input>
                <input id='imageurl' onChange={this.handleChange} defaultValue={this.props.article.imageurl}></input>
                <textarea id='body' onChange={this.handleChange} defaultValue={this.props.article.body}></textarea>
                <button>Update it</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editArticle: (article) => {
            dispatch(editArticle(article))
        }
    }
}



export default connect(null, mapDispatchToProps)(EditArticleForm)