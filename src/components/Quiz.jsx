import React from "react";
import MCQ from "./MCQ";

export default function Quiz(props) {
    const [correctIndex, setCorrectIndex] = React.useState([]);
    let [userSelection, setUserSelection] = React.useState([] = new Array(10).fill(-1));
    let [isSubmitted, setIsSubmitted] = React.useState(false)
    let [score, setScore] = React.useState(0);

    function randNum() {
        const array = new Array(props.questions.length);
        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 4);
        }
        return array;
    }
    React.useEffect(
        () => {
            setCorrectIndex(randNum());
        }, []
    )
    function decode(str) {
        let txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    }
    function setUserSelectionFunc(id, option) {
        setUserSelection((prevArr) => {
            let newArr = [];
            prevArr.map((ele, index) => {
                if (index === id) {
                    newArr.push(option)
                } else {
                    newArr.push(ele)
                }
            })
            return newArr;
        })
    }

    let category = props.questions[0].category;
    let allMCQ = [];
    props.questions.map((mcq, index) => {

        let options = new Array(4).fill(' ');
        for (let i = 0, j = 0; i < 4; i++) {
            if (i == correctIndex[index]) {
                options[i] = decode(mcq.correct_answer);
            } else {
                options[i] = decode(mcq.incorrect_answers[j]);
                j++;
            }
        }
        allMCQ.push(
            <MCQ
                key={index}
                id={index}
                question={decode(mcq.question)}
                options={options}
                userSelection={userSelection[index]}
                correctIndex={correctIndex[index]}
                setUserSelection={setUserSelectionFunc}
                isSubmitted={isSubmitted}
            />
        )
    })

    function checkAnswers() {
        console.log('User Selection ')
        console.log(userSelection)
        console.log('Correct Index ')
        console.log(correctIndex)
        for (let i = 0; i < props.questions.length; i++) {
            if (userSelection[i] === correctIndex[i]) {
                setScore(value => ++value)
            }
        }
        setIsSubmitted(true)
    }

    return (
        <div className="quiz-div">
            <p className="quiz-subject">
                <span className="back-btn" onClick={()=>props.startQuizFunc('no')}>&larr;</span>
                {category}
            </p>
            <div className="all-mcq-div">
                {allMCQ}
            </div>
            <div className="flex-all-center">
                <input
                    className={isSubmitted ? 'submitted' : ''}
                    id="submit-btn"
                    type="button"
                    value={isSubmitted ? 'Submitted' : 'Submit'}
                    onClick={!isSubmitted?checkAnswers:null}
                />
            </div>
            {isSubmitted ?
                <div className="flex-all-center">
                    <div className="score-div">
                        <span>Category: {category}</span>
                        <p>Total Questions: {props.questions.length}</p>
                        <p>Correct Answers: {score}</p>
                    </div>
                </div> :
                <></>
            }
        </div>
    )
}