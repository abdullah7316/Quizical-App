import React from "react";
import FirstPage from "./components/FirstPage";
import Quiz from "./components/Quiz";

export default function App() {
  let [link, setLink] = React.useState('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
  let [startQuiz, setStartQuiz] = React.useState(false)
  function startQuizFunc(str) {
    if(str === 'no'){
      setStartQuiz(value => !value);
    }else{
      setLink(str)
      setStartQuiz(value => !value);
    }
  }
  let [questions, setQuestions] = React.useState([])
  let [rightIndex, setRightIndex] = React.useState([])
  let [isLoaded, setIsLoaded] = React.useState(false)

  async function getDataFromAPI() {
    try {
      const response = await fetch(link);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setQuestions(data.results);
      setIsLoaded(true);
    } catch (error) {
      console.error("Error fetching data from API:", error);
      alert('There is an error while fetching data from api. Please Try again!')
    }
  }
  
  React.useEffect(
    () => {
      getDataFromAPI();
    }, [link]
  )

  return (
    <>
      {!startQuiz ?
        <FirstPage startQuizFunc={startQuizFunc} /> :
        isLoaded ?
          <Quiz
            startQuizFunc={startQuizFunc}
            startQuiz={startQuiz}
            questions={questions}
            rightIndex={rightIndex}
            setRightIndex={setRightIndex}
          /> :
          <h2>Loading...</h2>
      }
    </>
  )
}