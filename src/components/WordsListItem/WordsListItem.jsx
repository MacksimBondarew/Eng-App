import { ArrowForwardIcon, DeleteIcon, RepeatIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    GridItem,
    Icon,
    Input,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const WordsListItem = ({
    id,
    ukrWord,
    engWord,
    deleteWord,
    editWord,
    checked,
    checkWord,
}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editUkrWord, setEditUkrWord] = useState(ukrWord);
    const [editEngWord, setEditEngWord] = useState(engWord);

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
            editWord(word);
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
                    <Box mb='10px'>
                        <Input
                            variant="outline"
                            type="text"
                            value={editUkrWord}
                            name="ukrWord"
                            onChange={handleChange}
                            mb='2'
                            fontWeight='500'
                            border='1px solid #3eb489'
                        />
                        <Input
                            variant="outline"
                            type="text"
                            value={editEngWord}
                            name="engWord"
                            onChange={handleChange}
                            fontWeight='500'
                            border='1px solid #3eb489'
                        />
                    </Box>
                ) : (
                    <>
                        <Box display="flex" gap="3" alignItems="center" mb='15px'>
                            <Icon
                                xmlns="http://www.w3.org/2000/svg"
                                zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001"
                                preserveAspectRatio="xMidYMid meet"
                                version="1.0"
                                width="30px"
                                height="30px"
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
                            <Text fontWeight="600" fontSize="20">
                                {ukrWord}
                            </Text>
                        <ArrowForwardIcon></ArrowForwardIcon>
                        <Icon
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 60 30"
                                width="30px"
                                height="30px"
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
                            <Text fontWeight="600" fontSize="20">
                                {engWord}
                            </Text>
                        </Box>
                    </>
                )}
                <Box display='flex' gap='20px' justifyContent='center' marginBottom='10px' >
                    <Button type="button" rightIcon={<DeleteIcon />} fontSize='12' width='80px' height='30px' colorScheme='red' onClick={() => deleteWord(id)}>
                        Delete
                    </Button>
                    <Button type="button" rightIcon={<RepeatIcon />} fontSize='12' width='80px' height='30px' color='white' colorScheme='whatsapp' onClick={() => edit()}>
                        Edit
                    </Button>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent='center'>
                    <Checkbox
                        onChange={() => checkWord(id)}
                        checked={checked}
                        colorScheme="green"
                        defaultChecked
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
