import React, { Component } from 'react';
import { connect } from 'react-redux';
import Option from './Option'

class Quiz extends Component {
    state = {
        qi: 1,
        total : this.props.question_set.length,
        answered: false,
        correct: 0,
        css_class: []
    }
    showNext = () => {
        if (this.state.qi < this.state.total ) {
            let qi = this.state.qi + 1
            this.setState({
                answered: false,
                qi: qi,
                css_class: []
            })
        } else if(this.state.qi === this.state.total && this.state.answered === false) {
            this.setState({
                answered: true
            })
        } else {
            this.props.showResult(this.state.total, this.state.correct)
        }
    }
    answered = (index) => {
        const optionLength = this.props.question_set[this.state.qi -1].options.length
        const css = []
        if(false === this.state.answered) {
            for( let i = 0; i < optionLength; ++i) {
                if (i === index && (index + 1) === this.props.question_set[this.state.qi -1].answer_number) {
                    css.push('correct')
                } else if (i === index && (index + 1) !== this.props.question_set[this.state.qi -1].answer_number) {
                    css.push('incorrect')
                } else if ( i !== index && i === this.props.question_set[this.state.qi -1].answer_number - 1) {
                    css.push('correct')
                } else {
                    css.push('disabled')
                }
                this.setState({
                    css_class: css
                })
            }
            if ( (index + 1) === this.props.question_set[this.state.qi -1].answer_number) {
                this.setState({
                    answered: true,
                    correct: this.state.correct + 1
                })
            } else {
                this.setState({
                    answered: true
                })
            }
        }
    }
    render() {
        const {question_set} = this.props
        let currentQuestion = question_set[this.state.qi -1]
        const btn_class = this.state.answered ? 'btn btn-primary' : 'btn btn-secondary'
        return (
            <div className="quiz-wrap">
                <div className="row">
                    <div className="col-md-5">
                        <div className="question-wrap">
                            <div className="section-heading text-center">
                                <h1>Question {this.state.qi}/{this.state.total}</h1>
                            </div>
                            <div className="section-body">
                                {currentQuestion.question} <br/>
                            </div>
                            <div className="section-footer text-center">
                                <span className={btn_class} onClick={this.showNext}>
                                    {this.state.qi !== this.state.total ? (this.state.answered ? "Next Question" : "Skip This Question") : (this.state.answered ? "See Result" : "Skip This Question")}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="options-wrap">
                            <Option options={currentQuestion.options} css_class={this.state.css_class} answered={this.answered} />
                            <div className="instruction text-right">Choose option from above</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        question_set: state.question_set
    }
}

export default connect(mapStateToProp)(Quiz)