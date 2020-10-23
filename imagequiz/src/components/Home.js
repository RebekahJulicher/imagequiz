import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import server from '../ServerInterface/server.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [],
        };
    }

    /* Maintaining score between quizzes in this file doesn't work because App.js rebuilds
     this entire page every time it redirects to it. Login info doesn't stay in place
     after taking a quiz either. I was fiddling with adding methods and global variables
     to App.js, but it didn't work out.
     I asked some questions on Piazza about this, but didn't get a response.
     */

    body = () => {
        return (
            <div>
                {this.state.data.length > 0 ?
                    <div>
                        {this.state.data.map((q, i) =>
                            <div className="pictureDiv" key={i}>
                                <Link className="quizLink" to={{pathname: "/quiz", state: {id: q.id}}}>
                                    <figure>
                                        <img src={require ("../images/" + q.picture)}></img>
                                        <figcaption>{q.title}</figcaption>
                                    </figure>
                                </Link>
                            </div>)}
                    </div>
                    : ""}
            </div>
        );
    }

    componentDidMount() {
        let data = server.getQuizzes();
        this.setState({ data: data });
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

        return (
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username
                        : <Link to='/login'>Login</Link>}
                </div>
                {this.body()}
            </div>
        )
    }
}

export default Home;