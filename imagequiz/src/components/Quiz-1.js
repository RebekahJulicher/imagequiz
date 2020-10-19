import React from 'react';
import { Redirect } from 'react-router-dom';
import cherry from "../../src/images/cherryblossom.png";

class Quiz1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            finished: false
        };
    }

    onSubmit = (event) => {
        this.setState({finished: true});
        event.preventDefault();
    }

    render() {
        let from = {pathname: '/imagequiz/'};

        if(this.state.finished) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div class="question">
                        <img src={cherry} alt="Cherry Blossom"/>
                        <h2>What is this picture?</h2>
                    </div>
                    <div class="answer-set">
                        <button class="correct-answer">pickle</button>
                        <button>pickle</button>
                        <button>pickle</button>
                        <button>pickle</button>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default Quiz1;