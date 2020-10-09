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
        let username = '';
        const location = this.props.location
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        }

        return(
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username
                    : <Link to='/login'>Login</Link>}
                </div>
                <div>Homepage Starter Text</div>
            </div>
        )
    }
}

export default Home;