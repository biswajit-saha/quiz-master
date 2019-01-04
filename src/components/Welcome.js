import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="note-wrap">
                        <div className="section-heading text-center">
                            <h1>Welcome To QuizMaster!</h1>
                        </div>
                        <div className="section-body">
                            Hello there! It's a Quiz app built using react Js just for fun and learning. Please click "START THE QUIZ" button to go through the questions. All the questions are related to basic coumputer knowledge. So have fun. :)
                        </div>
                        <div className="section-footer text-center">
                            <span className="btn btn-primary" onClick={this.props.showQuiz}>Start The Quiz</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
