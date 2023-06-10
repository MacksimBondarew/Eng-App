import { Container, Grid } from '@chakra-ui/react';
import WordsListItem from 'components/WordsListItem/WordsListItem';
import { useSelector } from 'react-redux';
import { selectWords } from 'redux/selectors';
const WordsList = () => {
    const words = useSelector(selectWords);
    return (
        <Container
            style={{
                paddingBottom: '30px',
                marginLeft: '0',
                marginRight: '0',
                marginInlineStart: 'unset',
                marginInlineEnd: 'unset',
                maxWidth: '100%',
            }}
        >
            <Grid templateColumns="repeat(3, 1fr)" gap={7}>
                {words.map(({ id, ukrWord, engWord, checked }) => {
                    return (
                        <WordsListItem
                            key={id}
                            id={id}
                            ukrWord={ukrWord}
                            engWord={engWord}
                            checked={checked}
                        />
                    );
                })}
            </Grid>
        </Container>
    );
};
export default WordsList;
