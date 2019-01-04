import React, { Component } from 'react';

class Result extends Component {
    render() {
        let percent = ((this.props.correct / this.props.total) * 100).toFixed(1);
        percent = percent % 1 === 0 ? Math.floor(percent) : percent
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="note-wrap">
                        <div className="section-heading text-center">
                            <h1>Congratulation! Your result!</h1>
                        </div>
                        <div className="section-body">
                            <div className="result-count text-center">
                                You Have answered <span className="highltght">{this.props.correct}</span> out of <span className="highltght">{this.props.total}</span> questions correctly.
                                <br/>Your score <span className="highltght">{percent}%</span>
                            </div>
                        </div>
                        <div className="section-footer text-center">
                            <span className="btn btn-primary" onClick={this.props.showQuiz}>Start Again</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result
