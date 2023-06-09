import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Flag from 'react-world-flags';
import { useDispatch } from 'react-redux';
import { addWord } from 'redux/words';

const WordForm = ({ addWords }) => {
    const [ukrWord, setUkrWord] = useState('');
    const [engWord, setEngWord] = useState('');
    const [submited, setSubmited] = useState(false);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'ukrWord':
                setUkrWord(value);
                break;
            case 'engWord':
                setEngWord(value);
                break;
            default:
                break;
        }
    };
    const isUkrainian = /^[А-Яа-яЇїІіЄєҐґ\s]+$/.test(ukrWord);
    const isEnglish = /[A-Za-z]+/.test(engWord);
    const isEmptyUkr = ukrWord.trim() === '';
    const isEmptyEng = engWord.trim() === '';

    const handleSubmit = e => {
        e.preventDefault();
        if (!isUkrainian || isEmptyUkr) {
            setSubmited(true);
            return;
        }
        if (!isEnglish || isEmptyEng) {
            setSubmited(true);
            return;
        }
        const word = {
            id: nanoid(),
            ukrWord,
            engWord,
            checked: false,
        };
        dispatch(addWord(word));
        setUkrWord('');
        setEngWord('');
        setSubmited(false);
    };

    return (
        <Container
            display="flex"
            justifyContent="center"
            paddingTop="20"
            paddingBottom="80px"
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    border: '3px solid #3eb489',
                    borderRadius: '16px',
                    padding: '30px 20px 30px 20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <Text
                    fontSize="25px"
                    textAlign="center"
                    fontWeight="semibold"
                    mb="30px"
                >
                    Here you can add a word to your dictionary
                </Text>
                <InputGroup
                    marginBottom="50"
                    justifyContent="center"
                    display="flex"
                    gap="30px"
                >
                    <FormControl
                        isInvalid={submited && (!isUkrainian || isEmptyUkr)}
                    >
                        <InputGroup display="flex" flexWrap="wrap">
                            <InputLeftElement
                                pointerEvents="none"
                                height="48px"
                            >
                                <Flag
                                    width="20px"
                                    height="20px"
                                    code="UA"
                                ></Flag>
                            </InputLeftElement>
                            <Input
                                variant="outline"
                                type="text"
                                value={ukrWord}
                                name="ukrWord"
                                onChange={handleChange}
                                size="lg"
                            />
                            {submited && (!isUkrainian || isEmptyUkr) && (
                                <FormErrorMessage>
                                    Please enter a valid Ukrainian word
                                </FormErrorMessage>
                            )}
                        </InputGroup>
                    </FormControl>
                    <ArrowForwardIcon
                        textAlign="center"
                        marginTop="4%"
                    ></ArrowForwardIcon>
                    <FormControl
                        isInvalid={submited && (!isEnglish || isEmptyEng)}
                    >
                        <InputGroup display="flex" flexWrap="wrap">
                            <InputLeftElement
                                pointerEvents="none"
                                height="48px"
                            >
                                <Flag
                                    width="20px"
                                    height="20px"
                                    code="GB_NIR"
                                ></Flag>
                            </InputLeftElement>
                            <Input
                                label="english"
                                variant="outline"
                                type="text"
                                value={engWord}
                                name="engWord"
                                onChange={handleChange}
                                size="lg"
                            />
                            {submited && (!isEnglish || isEmptyEng) && (
                                <FormErrorMessage>
                                    Please enter a valid Ukrainian word
                                </FormErrorMessage>
                            )}
                        </InputGroup>
                    </FormControl>
                </InputGroup>
                <Button type="submit" colorScheme="whatsapp">
                    Add word
                </Button>
            </form>
        </Container>
    );
};

export default WordForm;
