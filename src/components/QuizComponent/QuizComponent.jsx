import { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWords } from 'redux/selectors';
import { checkWord } from 'redux/words';

const getRandomIntegetFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const QuizComponent = () => {
    const words = useSelector(selectWords);
    const [checkedWords, setCheckedWords] = useState(filteredWords(words));
    const [randomWord, setRandomWord] = useState(
        checkedWords[getRandomIntegetFromInterval(0, checkedWords.length - 1)]
    );
    const [submited, setSubmited] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setRandomWord(checkedWords[getRandomIntegetFromInterval(0, checkedWords.length - 1)]);
    }, [checkedWords]);

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
    const handleQuizAnswer = id => {
        if (randomWord.id === id) {
            dispatch(checkWord(randomWord.id));
            setCheckedWords(prevState =>
                prevState.filter(word => word.id !== randomWord.id)
            );
        } 
        else {
            const remainingWords = checkedWords.filter(word => word.id !== randomWord.id);
            const newRandomWord =
                remainingWords[getRandomIntegetFromInterval(0, remainingWords.length - 1)];
            setRandomWord(newRandomWord);
        }
    };
    return (
        <Box padding="30px 20px" border="3px solid #3eb489" borderRadius="15px">
            <Text fontWeight="600" fontSize="30px" textAlign="center">
                {randomWord?.ukrWord}
            </Text>
            <Text textAlign="center" fontSize="sm" color="gray.400" mb="30px">
                It remains to learn the words {checkedWords.length}
            </Text>

            {variants?.map(variant => (
                <Button
                    key={variant?.id}
                    onClick={() => handleQuizAnswer(variant.id)}
                    mr="10px"
                    colorScheme={
                        submited
                            ? variant.engWord === randomWord.engWord
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
