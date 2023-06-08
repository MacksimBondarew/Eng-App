import { Container, Grid } from '@chakra-ui/react';
import WordsListItem from 'components/WordsListItem/WordsListItem';
const WordsList = ({ words, deleteWord, editWord, checkWord }) => {
    return (
        <Container style={{ marginLeft: '0', marginRight: '0', marginInlineStart:'unset', marginInlineEnd: 'unset', maxWidth: '100%'}} >
            <Grid templateColumns="repeat(6, 1fr)" gap={7}>
                {words.map(({ id, ukrWord, engWord, checked }) => {
                    return (
                        <WordsListItem
                            key={id}
                            id={id}
                            ukrWord={ukrWord}
                            engWord={engWord}
                            deleteWord={deleteWord}
                            editWord={editWord}
                            checked={checked}
                            checkWord={checkWord}
                        />
                    );
                })}
            </Grid>
        </Container>
    );
};
export default WordsList;
