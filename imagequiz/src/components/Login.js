import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            authenticated: false
        };
    }

    onSubmit = (event) => {
        if(this.state.username.trim().length > 0) {
            this.setState({authenticated: true});
        }
        event.preventDefault();
    }

    onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username"
                        value={this.state.username}
                        onChange={this.onInputChange}
                    ></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

}

export default Login;