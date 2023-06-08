import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
    Button,
    Container,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const WordForm = ({ addWords }) => {
    const [ukrWord, setUkrWord] = useState('');
    const [engWord, setEngWord] = useState('');

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

    const handleSubmit = e => {
        e.preventDefault();
        const word = {
            id: nanoid(),
            ukrWord,
            engWord,
            checked: false,
        };
        addWords(word);
        setUkrWord('');
        setEngWord('');
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
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    gap="30px"
                >
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" height="48px">
                            <Icon
                                xmlns="http://www.w3.org/2000/svg"
                                zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001"
                                preserveAspectRatio="xMidYMid meet"
                                version="1.0"
                                width="20px"
                                height="20px"
                            >
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 2.511719 6.132812 L 27.191406 6.132812 L 27.191406 16 L 2.511719 16 Z M 2.511719 6.132812 "
                                            clip-rule="nonzero"
                                        />
                                    </clipPath>
                                    <clipPath id="id2">
                                        <path
                                            d="M 2.511719 15 L 27.191406 15 L 27.191406 24.277344 L 2.511719 24.277344 Z M 2.511719 15 "
                                            clip-rule="nonzero"
                                        />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path
                                        fill="rgb(0%, 35.688782%, 73.329163%)"
                                        d="M 24.445312 6.132812 L 5.257812 6.132812 C 3.746094 6.132812 2.515625 7.382812 2.515625 8.925781 L 2.515625 15.207031 L 27.183594 15.207031 L 27.183594 8.925781 C 27.183594 7.382812 25.957031 6.132812 24.445312 6.132812 Z M 24.445312 6.132812 "
                                        fill-opacity="1"
                                        fill-rule="nonzero"
                                    />
                                </g>
                                <g clip-path="url(#id2)">
                                    <path
                                        fill="rgb(100%, 83.529663%, 0%)"
                                        d="M 27.183594 21.488281 C 27.183594 23.027344 25.957031 24.277344 24.445312 24.277344 L 5.257812 24.277344 C 3.746094 24.277344 2.515625 23.027344 2.515625 21.488281 L 2.515625 15.207031 L 27.183594 15.207031 Z M 27.183594 21.488281 "
                                        fill-opacity="1"
                                        fill-rule="nonzero"
                                    />
                                </g>
                            </Icon>
                        </InputLeftElement>
                        <Input
                            variant="outline"
                            type="text"
                            value={ukrWord}
                            name="ukrWord"
                            onChange={handleChange}
                            size="lg"
                        />
                    </InputGroup>
                    <ArrowForwardIcon></ArrowForwardIcon>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" height="48px">
                            <Icon
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 60 30"
                                width="20px"
                                height="20px"
                            >
                                <clipPath id="s">
                                    <path d="M0,0 v30 h60 v-30 z" />
                                </clipPath>
                                <clipPath id="t">
                                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                                </clipPath>
                                <g clip-path="url(#s)">
                                    <path
                                        d="M0,0 v30 h60 v-30 z"
                                        fill="#012169"
                                    />
                                    <path
                                        d="M0,0 L60,30 M60,0 L0,30"
                                        stroke="#fff"
                                        stroke-width="6"
                                    />
                                    <path
                                        d="M0,0 L60,30 M60,0 L0,30"
                                        clip-path="url(#t)"
                                        stroke="#C8102E"
                                        stroke-width="4"
                                    />
                                    <path
                                        d="M30,0 v30 M0,15 h60"
                                        stroke="#fff"
                                        stroke-width="10"
                                    />
                                    <path
                                        d="M30,0 v30 M0,15 h60"
                                        stroke="#C8102E"
                                        stroke-width="6"
                                    />
                                </g>
                            </Icon>
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
                    </InputGroup>
                </InputGroup>
                <Button
                    variant="contained"
                    type="submit"
                    backgroundColor="#3CB371 "
                    color="white"
                >
                    Add word
                </Button>
            </form>
        </Container>
    );
};

export default WordForm;
