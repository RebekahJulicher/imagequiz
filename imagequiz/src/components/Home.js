import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import server from '../ServerInterface/server.js';
import history from '../ServerInterface/history';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [],
        };
    }

    body = () => {
        let username = '';
        const location = this.props.location
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        }
        console.log(history)
        return (
            <div>
                {this.state.data.length > 0 ?
                    <div>
                        {this.state.data.map((q, i) =>
                            <div className="pictureDiv" key={i}>
                                <Link className="quizLink" to={{
                                    pathname: "/quiz", state:
                                        { id: q.id, user: username }
                                }}>
                                    <figure>
                                        <img src={require("../images/" + q.picture)}></img>
                                        <figcaption>{q.title}
                                            {history[q.id] ? " - Try Again?" : ""}
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>)}
                    </div>
                    : ""}
            </div>
        );
    }

    componentDidMount() {
        server.getQuizzes().then(data => this.setState({data: data})).catch(e => console.log(e));
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