import { useState } from 'react';
import shuffle from 'lodash.shuffle';
import { nanoid } from 'nanoid';
import { Box, Button, Text } from '@chakra-ui/react';

const getRandomIntegetFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const QuizComponent = ({ words, checkWord }) => {
    const [checkedWords, setCheckedWords] = useState(filteredWords(words));
    const [randomWord, setRandomWord] = useState(
        checkedWords[getRandomIntegetFromInterval(0, checkedWords.length - 1)]
    );
    const [submited, setSubmited] = useState(false);
    function getVariants() {
        const variants = new Array(3).fill(null).reduce((acc, _, index) => {
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
        setSubmited(false);
        const engWord = event.target.innerText;
        if (randomWord.engWord === engWord) {
            checkWord(randomWord.id);
            setCheckedWords(prevState =>
                prevState.filter(word => word.engWord !== engWord)
            );
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
        setSubmited(false);
        return setRandomWord(newRandomWord);
    };

    return (
        <Box padding="30px 20px" border="3px solid #3eb489" borderRadius="15px">
            <Text fontWeight="600" fontSize="30px" textAlign="center">
                {randomWord?.ukrWord}
            </Text>
            <Text textAlign="center" fontSize="sm" color="gray.400" mb="30px">
                It remains to learn the words {checkedWords.length}
            </Text>
            {variants.map(variant => (
                <Button
                    key={nanoid()}
                    onClick={event => handleQuizAnswer(event, randomWord)}
                    mr="10px"
                    colorScheme={
                        submited
                            ? variant?.engWord === randomWord.engWord
                                ? 'whatsapp'
                                : 'red'
                            : 'gray'
                    }
                >
                    {variant?.engWord}
                </Button>
            ))}
        </Box>
    );
};
