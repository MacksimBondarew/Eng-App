import { useState } from 'react';

import WordForm from './WordForm/WordForm';
import WordsList from './WordsList/WordsList';

export const App = () => {
    const [words, setWords] = useState([]);

    const addWords = word => {
        setWords(prevState => [word, ...prevState]);
    };

    const deleteWord = id => {
        setWords(prevState => prevState.filter(word => word.id !== id));
    };
    const editWord = editWord => {
        setWords(prevState =>
            prevState.map(word => {
                if (word.id === editWord.id) {
                    return editWord;
                }
                return word;
            })
        );
    };

    return (
        <>
            <WordForm addWords={addWords} />
            <WordsList
                words={words}
                deleteWord={deleteWord}
                editWord={editWord}
            />
        </>
    );
};
