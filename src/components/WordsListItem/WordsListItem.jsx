import { ArrowForwardIcon, DeleteIcon, RepeatIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, GridItem, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Flag from 'react-world-flags';
import { editWord } from 'redux/operations';


const WordsListItem = ({
    id,
    ukrWord,
    engWord,
    deleteWord,
    checked,
    checkWord,
}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editUkrWord, setEditUkrWord] = useState(ukrWord);
    const [editEngWord, setEditEngWord] = useState(engWord);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'ukrWord':
                setEditUkrWord(value);
                break;
            case 'engWord':
                setEditEngWord(value);
                break;
            default:
                break;
        }
    };

    const edit = () => {
        setIsEdit(prevState => !prevState);
        if (isEdit) {
            const word = {
                id,
                ukrWord: editUkrWord,
                engWord: editEngWord,
            };
            dispatch(editWord(word));
        }
    };

    return (
        <>
            <GridItem
                w="100%"
                h="100%"
                padding="20px 15px"
                border="2px solid #3eb489"
                borderRadius="16px"
            >
                {isEdit ? (
                    <Box mb="10px">
                        <Input
                            variant="outline"
                            type="text"
                            value={editUkrWord}
                            name="ukrWord"
                            onChange={handleChange}
                            mb="2"
                            fontWeight="500"
                            border="1px solid #3eb489"
                        />
                        <Input
                            variant="outline"
                            type="text"
                            value={editEngWord}
                            name="engWord"
                            onChange={handleChange}
                            fontWeight="500"
                            border="1px solid #3eb489"
                        />
                    </Box>
                ) : (
                    <>
                        <Box
                            display="flex"
                            gap="3"
                            alignItems="center"
                            justifyContent="center"
                            mb="15px"
                        >
                            <Flag width="30px" height="30px" code="UA"></Flag>
                            <Text fontWeight="600" fontSize="20">
                                {ukrWord}
                            </Text>
                            <ArrowForwardIcon></ArrowForwardIcon>
                            <Flag width="30px" height="30px" code="GB"></Flag>
                            <Text fontWeight="600" fontSize="20">
                                {engWord}
                            </Text>
                        </Box>
                    </>
                )}
                <Box
                    display="flex"
                    gap="20px"
                    justifyContent="center"
                    marginBottom="10px"
                >
                    <Button
                        type="button"
                        rightIcon={<DeleteIcon />}
                        fontSize="12"
                        width="80px"
                        height="30px"
                        colorScheme="red"
                        onClick={() => deleteWord(id)}
                    >
                        Delete
                    </Button>
                    <Button
                        type="button"
                        rightIcon={<RepeatIcon />}
                        fontSize="12"
                        width="80px"
                        height="30px"
                        color="white"
                        colorScheme="whatsapp"
                        onClick={() => edit()}
                    >
                        Edit
                    </Button>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    <Checkbox
                        onChange={() => checkWord(id)}
                        isChecked={checked}
                        colorScheme="green"
                        fontWeight="600"
                    >
                        To study
                    </Checkbox>
                </Box>
            </GridItem>
        </>
    );
};
export default WordsListItem;
