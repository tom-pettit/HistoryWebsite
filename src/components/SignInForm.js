import React from 'react'

class SignInForm extends React.Component {

    state = {
        username: '',
        password: ''
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
                <input id='username' onChange={this.handleChange} placeholder='username'></input>
                <input id='password' onChange={this.handleChange} placeholder='password'></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default SignInForm