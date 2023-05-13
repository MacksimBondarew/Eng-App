import WordsListItem from 'components/WordsListItem/WordsListItem';
const WordsList = ({ words, deleteWord, editWord }) => {
    return (
        <ul>
            {words.map(({ id, ukrWord, engWord }, index) => {
                return (
                    <WordsListItem
                        key={id}
                        id={id}
                        ukrWord={ukrWord}
                        engWord={engWord}
                        itemNumber={index + 1}
                        deleteWord={deleteWord}
                        editWord={editWord}
                    />
                );
            })}
        </ul>
    );
};
export default WordsList;
