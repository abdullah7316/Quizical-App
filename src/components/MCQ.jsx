import React from "react";

export default function MCQ(props) {
    let NAME = `option${props.id}`;
    function bgColor(opt) {
        return props.isSubmitted ?
            props.correctIndex === opt ?
                'correctAnswer' :
                props.userSelection === opt ?
                    'wrongAnswer' :
                    '' :
            ''
    }
    return (
        <div className="mcq-div">
            <p className="question">{props.id + 1}. {props.question}</p>
            <div className="options-div flex-all-center">
                <div className="opt-0">
                <input
                    disabled={props.isSubmitted ? true : false}
                    type="radio"
                    name={NAME}
                    id={NAME + '-1'}
                    onClick={() => props.setUserSelection(props.id, 0)}
                />
                <label
                    className={bgColor(0)}
                    htmlFor={NAME + '-1'}>{props.options[0]}</label>
                </div>
                <div className="opt-1">
                <input
                    disabled={props.isSubmitted ? true : false}
                    type="radio"
                    name={NAME}
                    id={NAME + '-2'}
                    onClick={() => props.setUserSelection(props.id, 1)}
                />
                <label
                    className={bgColor(1)}
                    htmlFor={NAME + '-2'}>{props.options[1]}</label>
                </div>
                <div className="opt-2">
                <input
                    disabled={props.isSubmitted ? true : false}
                    type="radio"
                    name={NAME}
                    id={NAME + '-3'}
                    onClick={() => props.setUserSelection(props.id, 2)}
                />
                <label
                    className={bgColor(2)}
                    htmlFor={NAME + '-3'}>{props.options[2]}</label>
                </div>
                <div className="opt-3">
                <input
                    disabled={props.isSubmitted ? true : false}
                    type="radio"
                    name={NAME}
                    id={NAME + '-4'}
                    onClick={() => props.setUserSelection(props.id, 3)}
                />
                <label
                    className={bgColor(3)}
                    htmlFor={NAME + '-4'}>{props.options[3]}</label>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}