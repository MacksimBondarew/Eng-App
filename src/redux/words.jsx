import { editWord } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");



const state = {
    words: [],
}

const stateWords = createSlice({
    name: 'words',
    initialState: state,
    reducers: {
        addWord(state, action) {
            state.words.push(action.payload);
        },
        deleteWord(state, action) {
            state.words = state.words.filter(name => name !== action.payload);
        },
        checkWord(state, action) {
            state.words.map(word => {
                if (word.id === action.payload.id) {
                    return {...word, checked: !word.checked}
                }
                return word;
            })
        },
    },
    extraReducers: builder => {
        builder.addCase(editWord.fulfilled, (state, action) => {
            state.words = action.payload;
        })
    },
});

export const { addWord, deleteWord, changeWord } = stateWords.actions;

export const stateReducer = stateWords.reducer;