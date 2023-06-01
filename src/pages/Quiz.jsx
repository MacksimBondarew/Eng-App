import { useState } from 'react';
import { QuizComponent } from 'components/QuizComponent/QuizComponent';

export const Quiz = ({ words, handleQuizAnswer, checkWord }) => {
    const [start, setStart] = useState(false);

    const handleStartQuiz = () => {
        setStart(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={handleStartQuiz}>button</button>
            {start && <QuizComponent checkWord={checkWord} handleQuizAnswer={handleQuizAnswer } words={words} />}
        </div>
    );
};
