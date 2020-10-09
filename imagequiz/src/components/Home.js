import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    render() {

        return(
            <div>
                <div className="loginButton">
                    {this.state.authenticated ? this.state.username
                    : <Link to='/login'>Login</Link>}
                </div>
                <div>Homepage Starter Text</div>
            </div>
        )
    }
}

export default Home;