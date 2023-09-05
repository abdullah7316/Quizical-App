import React from "react";

export default function FirstPage(props) {
    let [category, setCategory] = React.useState('any')
    let [difficulty, setDifficulty] = React.useState('any')
    let [amount, setAmount] = React.useState(10);
    function setAmountFunc(event) {
        const num = event.target.value;
        if (num > 0 && num <= 50) {
            setAmount(num)
        }
    }

    // https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple

    function handleBtn() {
        let categoryStr;
        category === 'any' ?
            categoryStr = '' :
            categoryStr = `category=${category}&`;
        let difficultyStr;
        difficulty === 'any' ?
            difficultyStr = '' :
            difficultyStr = `difficulty=${difficulty}&`;

        let link = `https://opentdb.com/api.php?amount=${amount}&${categoryStr}${difficultyStr}type=multiple`;
        props.startQuizFunc(link)
    }

    function setCategoryFunc(event){
        setCategory(event.target.value)
    }
    function setDifficultyFunc(event){
        setDifficulty(event.target.value)
    }
    return (
        <div className="first-page-container flex-all-center">
            <div className="content">
                <p className="title flex-all-center">QUIZICAL APP</p>
                <p className="tagline flex-all-center">Quiz, Learn, Grow
                <span>Developed By Abdullah</span></p>
                <div className="form-div">
                    <div className="amount-div flex-all-center">
                        <label htmlFor="amount">Select Amount: </label>
                        <input
                            name="amount"
                            type="number"
                            value={amount}
                            onChange={() => setAmountFunc(event)}
                        />
                    </div>
                    <div className="category-div flex-all-center">
                        <label htmlFor="category">Select Category: </label>
                        <select name="category" value={category} onChange={setCategoryFunc}>
                            <option value="any">Any Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="10">Entertainment: Books</option>
                            <option value="11">Entertainment: Film</option>
                            <option value="12">Entertainment: Music</option>
                            <option value="13">Entertainment: Musicals &amp; Theatres</option>
                            <option value="14">Entertainment: Television</option>
                            <option value="15">Entertainment: Video Games</option>
                            <option value="16">Entertainment: Board Games</option>
                            <option value="17">Science &amp; Nature</option>
                            <option value="18">Science: Computers</option>
                            <option value="19">Science: Mathematics</option>
                            <option value="20">Mythology</option>
                            <option value="21">Sports</option>
                            <option value="22">Geography</option>
                            <option value="23">History</option>
                            <option value="24">Politics</option>
                            <option value="25">Art</option>
                            <option value="26">Celebrities</option>
                            <option value="27">Animals</option>
                            <option value="28">Vehicles</option>
                            <option value="29">Entertainment: Comics</option>
                            <option value="30">Science: Gadgets</option>
                            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                            <option value="32">Entertainment: Cartoon &amp; Animations</option>
                        </select>
                    </div>
                    <div className="difficulty-div flex-all-center">
                        <label htmlFor="Difficulty">Select Difficulty: </label>
                        <select name="Difficulty" value={difficulty} onChange={setDifficultyFunc}>
                            <option value="any">Any Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>
                <input
                    className="flex-all-center"
                    id="start-quiz-btn"
                    type="button"
                    value="Start Quiz"
                    onClick={handleBtn}
                />
            </div>
        </div>
    )
}

// amount=10
// category=18
// difficulty=easy