import React from 'react';
import server from '../ServerInterface/server';
import Question from './Question';
import './Quiz.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            cursor: 0,
            score: 0,
            showResults: false
        }
    }

    goToNext = () => {
        if (this.state.cursor < this.state.data.questions.length - 1){
            this.setState({ cursor: this.state.cursor + 1});
        }
        else{
            this.setState({ showResults: true});
        }
    }

    goToLast = () => {
        if (this.state.cursor > 0){
            this.setState({ cursor: this.state.cursor - 1});
        }
    }

    retry = () => {
        this.setState({ cursor: 0 });
        this.setState({ showResults: false });
    }

    onChoiceSelected = (correct) => {
        if (correct === true){
            this.setState({ score: this.state.score + 1});
        }
    }

    componentDidMount() {
        let data = server.getQuiz(this.props.location.state.id);
        this.setState({ data: data });
    }

    render() {
        const { data, cursor, showResults } = this.state;
        return (
            <div className="content">
                {showResults === false ? 
                <div className="questionDiv">
                    {data.questions ? <Question question = {data.questions[cursor]} 
                    onChoiceSelected = {this.onChoiceSelected} cursor = {cursor} /> : ''}
                    <br />
                    <button onClick={this.goToLast}>Back</button>
                    <button onClick={this.goToNext}>Next</button>
                </div>
                : 
                <div className="resultDiv">
                    <h1>You scored {this.state.score}/6 correct.</h1>
                    <br />
                    <button onClick={this.retry}>Retry</button>
                    <button onClick={event => window.location.href='/imagequiz'}>Finish</button>
                </div>
                }
            </div>
        );
    }
}
export default Quiz;