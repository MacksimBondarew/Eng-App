import { QuizComponent } from 'components/QuizComponent/QuizComponent';
import { Box, Button, Container, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectWords } from 'redux/selectors';

export const Quiz = () => {
    const words = useSelector(selectWords);
    const checkedWords = words.filter(word => word.checked === true);

    return (
        <Container
            style={{
                padding: '30px 16px',
                marginLeft: '0',
                marginRight: '0',
                marginInlineStart: 'unset',
                marginInlineEnd: 'unset',
                maxWidth: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {checkedWords.length > 0 && words.length > 2 ? (
                <QuizComponent />
            ) : (
                <Box
                    borderRadius="15px"
                    padding="30px 20px"
                    border="3px solid #3eb489"
                    maxWidth="500px"
                    textAlign="center"
                >
                    <Text fontSize="18px" mb="15px">
                        To start learning words, please go to the "Home" page
                        and check the box next to the words you have chosen and
                        you must have at least 3 words in the dictionary. This
                        will allow you to actively participate in the learning
                        process and enrich your vocabulary
                    </Text>
                    <Link to={'/'}>
                        <Button colorScheme="whatsapp" display="inline-block">
                            Home
                        </Button>
                    </Link>
                </Box>
            )}
        </Container>
    );
};
