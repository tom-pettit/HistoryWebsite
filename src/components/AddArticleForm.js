import React from 'react'
import AddArticle from './SignIn'

class AddArticleForm extends React.Component {

    state = {
        title: '',
        tags: '',
        body: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input id='title' onChange={this.handleChange} placeholder='Title'></input>
                <input id='tags' onChange={this.handleChange} placeholder='Tags'></input>
                <input id='body' onChange={this.handleChange} placeholder='Body'></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddArticleForm