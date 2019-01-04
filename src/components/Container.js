import React, { Component } from 'react';
import Welcome from './Welcome'
import Quiz from './Quiz'
import Result from './Result'

class Container extends Component {
    state = {
        comp: 'welcome'
    }
    showQuiz = () => {
        this.setState({
            comp: 'quiz'
        })
    }
    showResult = (total, correct) => {
        this.setState({
            comp: 'result',
            total: total,
            correct: correct
        })
    }
    VisibleComponent = () => {
        switch(this.state.comp){
            case 'quiz': {
            return (<Quiz showResult={this.showResult} />)
            }
            case 'result': {
                return (<Result showQuiz={this.showQuiz} total={this.state.total} correct={this.state.correct} />)
            }
            default: {
            return(<Welcome showQuiz={this.showQuiz}/>)
            }
        }
    }
    render() {
        return (
            <section className="main-content">
                <div className="container">
                    {this.VisibleComponent()}
                </div>
            </section>
        )
    }
}

export default Container