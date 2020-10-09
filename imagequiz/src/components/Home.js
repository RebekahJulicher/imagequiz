import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import cherry from "../../src/images/cherryblossom.png";
import daffodil from "../../src/images/daffodil.png";
import daisy from "../../src/images/daisy.jpg";
import lily from "../../src/images/daisy.jpg";
import rose from "../../src/images/rose.png";
import sunflower from "../../src/images/sunflower.png";
import tulip from "../../src/images/tulip.png";
import waterlily from "../../src/images/waterlily.png";

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
                <div className="headerDiv">
                    <h1>Big Ol' Homepage</h1>
                </div>
                <div className="pictureDiv">
                    <figure className="figure">
                        <img src={cherry} />
                        <figcaption>
                            Cherry Blossom
                        </figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={daffodil} />
                        <figcaption>
                            Daffodil
                        </figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={daisy} />
                        <figcaption>
                            Daisy
                        </figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={lily} />
                        <figcaption>
                            Lily
                        </figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={rose} />
                        <figcaption>
                            Rose
                        </figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={sunflower} />
                        <figcaption>
                            Sunflower
                        </figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={tulip} />
                        <figcaption>
                            Tulip
                        </figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={waterlily} />
                        <figcaption>
                            Waterlily
                        </figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}

export default Home;