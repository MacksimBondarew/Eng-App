import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Container, Input } from '@chakra-ui/react';

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
        <Container width='400px' margin='20px auto 0 auto'>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: "wrap",
                }}
            >
                <Input
                    label="ukrainian"
                    variant="outlined"
                    type="text"
                    value={ukrWord}
                    name="ukrWord"
                    onChange={handleChange}
                    height='50px'
                />
                <Input
                    label="english"
                    variant="outlined"
                    type="text"
                    value={engWord}
                    name="engWord"
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">
                    add word
                </Button>
            </form>
        </Container>
    );
};

export default WordForm;
