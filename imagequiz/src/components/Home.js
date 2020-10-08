import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            showLoginForm: false,
            authenticated: false
        };
    }

    login = () => {
        this.setState({showLoginForm: true});
    }

    onSubmit = () => {
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

        if(this.state.showLoginForm) {
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

        return(
            <div>
                <div className="loginButton">
                    <button onClick={this.login}>Login</button>
                </div>
                <div>Homepage Starter Text</div>
            </div>
        )
    }
}

export default Home;