import { createAsyncThunk } from '@reduxjs/toolkit';

export const editWord = createAsyncThunk(
    'words/editWord',
    async (edit, thunkApi) => {
        try {
            const currentState = thunkApi.getState();
            console.log(currentState.map(word => {
                if (word.id === edit.id) {
                    return edit;
                }
                return word;
            }))
            return currentState.map(word => {
                if (word.id === edit.id) {
                    return edit;
                }
                return word;
            });
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
