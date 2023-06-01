// import { useState } from 'react';

import { useLocalStorage } from 'hooks/useLocalStaoreage';
import { Routes, Route } from 'react-router';
import { SharedLayout } from './sharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Quiz } from 'pages/Quiz';


export const App = () => {
    const [words, setWords] = useLocalStorage('words', []);

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

    const checkWord = (id) => {
        setWords(prevState =>
            prevState.map(word => {
                if (word.id === id) {
                    return {...word, checked: !word.checked}
                }
                return word;
            })
        );
    }

    const handleQuizAnswer  = (event, randomWord) => {
        const engWord = event.target.innerText;
        if (randomWord.engWord === engWord) {
            checkWord(randomWord.id)
        } else {
            console.log('-');
        }
    }; 

    return (
        <>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home
                        addWords={addWords}
                        checkWord={checkWord}
                        words={words}
                        deleteWord={deleteWord}
                        editWord={editWord}
                        />
                    }
                    />
                    <Route path='/quiz' element={<Quiz checkWord={checkWord} handleQuizAnswer={handleQuizAnswer } words={ words }  />} />
                </Route>
            </Routes> 
        </>
    );
};
