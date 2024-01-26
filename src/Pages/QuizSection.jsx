import React from "react";
import { useDarkMode } from "../ClickContext";
import './quizMain.css';

export default function Quiz ({ questionData}) {

    const { darkMode } = useDarkMode();
    console.log(darkMode);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);

    const handleNextClick = () => {
        setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questionData.length - 1));
        setSelectedAnswer(null);
    }
    
    const handlePrevClick = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setSelectedAnswer(null);
    };

    const handleAnswerClick = (selectedOptionKey) => {
        setSelectedAnswer(selectedOptionKey);
    };


    const currentQuestionData = questionData[currentQuestionIndex];


    const options = currentQuestionData 
        ? Object.keys(currentQuestionData.answers)
            .filter(optionKey => currentQuestionData.answers[optionKey] !== null && currentQuestionData.answers[optionKey] !== undefined)
            .map((optionKey, index) => {
                const optionText = currentQuestionData.answers[optionKey];
                // const isCorrect = currentQuestionData.correct_answers[`${optionKey}_correct`] === "true";
                const label = String.fromCharCode(65 + index);

                return (
                <button
                    key={optionKey}
                    onClick={() => handleAnswerClick(optionKey)}
                    style={{ backgroundColor: selectedAnswer === optionKey ? 'lightblue' : '' }}
                    className="option-buttons"
                >
                    {label}. {optionText} 
                </button>
                );
            })
        : [];
    ;

    const correctAnswerKey = Object.keys(currentQuestionData.correct_answers).find(
        key => currentQuestionData.correct_answers[key] === 'true'
    );
    const correctAnswer = correctAnswerKey.split('_').slice(0, 2).join('_');
    const correctAnswerValue = currentQuestionData.answers[correctAnswer];
    const isAnswerCorrect = selectedAnswer === correctAnswer;
 

    
    return(
        <div className={`quiz-main${!darkMode ? "-light" : "-dark"}`}>
            {currentQuestionData ? (
                <div className="qm-main">
                    <div className="qm-qus">
                        <h3>{currentQuestionIndex + 1}. {currentQuestionData.question}</h3>
                    </div>
                    <div className="qm-options">
                        {options}
                        {selectedAnswer && (
                            <div className="qm-ans">
                                {isAnswerCorrect ? (
                                    <p className="ans-c">Correct!</p>
                                ) : (
                                    <p className="ans-i">Incorrect. The correct answer is : <span>{correctAnswerValue}</span></p>
                                )}
                            </div>
                        )}
                        <div className="qm-buttons">
                            <button onClick={handlePrevClick} disabled={currentQuestionIndex === 0}><span className="material-icons">arrow_back_ios</span>Previous</button>
                            <button onClick={handleNextClick} disabled={currentQuestionIndex === questionData.length - 1}>Next<span className="material-icons">arrow_forward_ios</span></button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}