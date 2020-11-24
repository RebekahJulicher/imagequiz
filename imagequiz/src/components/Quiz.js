import React from 'react';
import server from '../ServerInterface/server';
import Question from './Question';
import { Link } from 'react-router-dom';
import './Quiz.css';
import history from '../ServerInterface/history';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.answers = [];
        this.state = {
            data: [],
            cursor: 0,
            score: 0,
            showResults: false
        }
    }

    goToNext = () => {
        if (this.state.cursor < this.state.data.length - 1) {
            this.setState({ cursor: this.state.cursor + 1 });
        }
        else {
            history[this.props.location.state.id] = true;
            let score = 0;
            for (let i = 0; i < this.answers.length; i++){
                if (this.answers[i]){
                    score += 1;
                }
            }
            server.saveScore()
            this.setState({ showResults: true, score: score });
        }
    }

    goToLast = () => {
        if (this.state.cursor > 0) {
            this.setState({ cursor: this.state.cursor - 1 });
        }
    }

    retry = () => {
        this.setState({ cursor: 0 });
        this.setState({ showResults: false });
    }

    onChoiceSelected = (isCorrect) => {
        this.answers[this.state.cursor] = isCorrect;
    }

    componentDidMount() {
        server.getQuiz(this.props.location.state.id).then(data => {console.log(data);
        this.setState({data: data});});
    }

    render() {
        const { data, cursor, showResults } = this.state;
        return (
            <div className="content">
                {showResults === false ?
                    <div className="questionDiv">
                        {data.length > 0 ? <Question question={data[cursor]}
                            onChoiceSelected={this.onChoiceSelected} cursor={cursor} /> : ''}
                        <br />
                        <button onClick={this.goToLast}>Back</button>
                        <button onClick={this.goToNext}>Next</button>
                    </div>
                    :
                    <div className="resultDiv">
                        <h1>You scored {this.state.score}/6 correct.</h1>
                        <br />
                        <button onClick={this.retry}>Retry</button>
                        <br />
                        <Link to={{ pathname: '/imagequiz', state: { user: this.props.location.state.user } }}>Finish</Link>
                    </div>
                }
            </div>
        );
    }
}
export default Quiz;