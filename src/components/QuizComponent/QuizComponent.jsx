import { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import { nanoid } from 'nanoid';

const getRandomIntegetFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const QuizComponent = ({ words, checkWord }) => {
    const [checkedWords, setCheckedWords] = useState(filteredWords(words));
    const [randomWord, setRandomWord] = useState(
        checkedWords[getRandomIntegetFromInterval(0, checkedWords.length - 1)]
    );
    function getVariants() {
        const variants = new Array(4).fill(null).reduce((acc, _, index) => {
            if (!index) {
                return [randomWord];
            }
            const random =
                words[getRandomIntegetFromInterval(0, words.length - 1)];
            if (acc.every(item => item?.id !== random?.id)) {
                return [...acc, random];
            } else {
                let word = null;
                for (let item of words) {
                    if (acc.every(word => word?.id !== item?.id)) {
                        word = item;
                        break;
                    }
                }
                return [...acc, word];
            }
        }, []);

        return shuffle(variants);
    }

    const variants = getVariants();

    function filteredWords(words) {
        return words.filter(word => word.checked);
    }
    const handleQuizAnswer = (event, randomWord) => {
        const engWord = event.target.innerText;
        if (randomWord.engWord === engWord) {
            checkWord(randomWord.id);
            setCheckedWords(prevState => prevState.filter(word => word.engWord !== engWord));
            const newRandomWord =
                checkedWords[
                    getRandomIntegetFromInterval(0, checkedWords.length - 1)
                ];
            return setRandomWord(newRandomWord);
        }
        const newRandomWord =
            checkedWords[
                getRandomIntegetFromInterval(0, checkedWords.length - 1)
            ];
        setRandomWord(newRandomWord);
    };
    useEffect(() => {
        console.log(123)
        console.log(randomWord);
        console.log(checkedWords);
    })

    return (
        <div>
            <h2>{randomWord.ukrWord}</h2>
            {variants.map(variant => (
                <button
                    key={nanoid()}
                    onClick={event => handleQuizAnswer(event, randomWord)}
                >
                    {variant.engWord}
                </button>
            ))}
        </div>
    );
};
