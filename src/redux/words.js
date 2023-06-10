const { createSlice } = require('@reduxjs/toolkit');

const state = {
    words: [],
};

const stateWords = createSlice({
    name: 'words',
    initialState: state,
    reducers: {
        addWord(state, action) {
            state.words.push(action.payload);
        },
        deleteWord(state, action) {
            state.words = state.words.filter(
                word => word.id !== action.payload
            );
        },
        editWord(state, action) {
            const newWords = state.words.map(word => {
                if (word.id === action.payload.id) {
                    return action.payload;
                }
                return word;
            });
            state.words = newWords;
        },
        checkWord(state, action) {
            state.words = state.words.map(word => {
                if (word.id === action.payload) {
                    return { ...word, checked: !word.checked };
                }
                return word;
            });
        },
    },
});

export const { addWord, deleteWord, checkWord, editWord } = stateWords.actions;

export const stateReducer = stateWords.reducer;
