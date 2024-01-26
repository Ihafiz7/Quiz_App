import React from "react";
import { useParams, Link } from "react-router-dom";
import './topic.css';
import Quiz from "./QuizSection";
import DakrModeButton from "./DarkModeButton";

export default function Topic () {

    const { topic } = useParams();
    const [questionsData, setQuestionsData] = React.useState(null);
    const hasFetchedData = React.useRef(false);


    React.useEffect(() => {
        const fetchQuestions = async () => {
        const response = await fetch(
            `https://quizapi.io/api/v1/questions?apiKey=GDYxEhcfezO6WwydO0xJQAFM7azUcIJpI5TUk05k&category=${topic}&difficulty=Medium&limit=10`
        );
        const data = await response.json();
        setQuestionsData(data);
        console.log(data);
        };

        if (!hasFetchedData.current) {
            fetchQuestions();
            hasFetchedData.current = true; 
        }
    }, [topic]);

    const questionData = questionsData;



    return(
        <div>
            <div>
                <div className="t-header">
                    <div>
                    <Link to='/' className="link t-icon">
                        <i className="material-icons">arrow_back_ios</i>
                        <h2>Questions on : {topic.toUpperCase()}</h2>
                    </Link>
                    </div>
                    <DakrModeButton />
                </div>
                {questionsData && (
                    <Quiz questionData={questionData} />
                )}
                <div className="t-footer">
                    <p>HANCRAFTEDBY <a href="mailto:hafizalasad712@gmail.com">HAFFIZ</a> ©twentytwentyfour</p>
                </div>
            </div>
        </div>
    );
}