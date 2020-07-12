import React from 'react'
import { connect } from 'react-redux'
import { createArticle } from '../../../store/actions/articleActions'

class CreateArticle extends React.Component {

    state = {
        title: '',
        imageurl: '',
        tags: '',
        body: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createArticle(this.state)
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input id='title' onChange={this.handleChange} placeholder='title'></input>
                <input id='tags' onChange={this.handleChange} placeholder='tags'></input>
                <input id='imageurl' onChange={this.handleChange} placeholder='image url'></input>
                <textarea id='body' onChange={this.handleChange} placeholder='start writing...'></textarea>
                <button>Upload</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => {
            dispatch(createArticle(article))
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle)