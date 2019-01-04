import React, { Component } from 'react';

class Option extends Component {
    handleClick = (e) => {
        this.props.answered(e.currentTarget.id)
    }
    render() {
        let {css_class} = this.props;
        const optionList = this.props.options.map( (option, index) => {
            let className = css_class.length ? 'option ' + css_class[index] : 'option'
            return (
                <div className={className} key={index} id={index} onClick={() => this.props.answered(index)}>
                    <span className="text-center">{String.fromCharCode(65 + index)}</span>{option}
                </div>
                )
            }
        )
        return (
            <div>
                {optionList}
            </div>
        )
    }
}

export default Option