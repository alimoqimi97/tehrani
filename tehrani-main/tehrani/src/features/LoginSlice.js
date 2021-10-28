import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'login',
    initialState:{
        username: ''
    },
    reducers: {
        setUsername: (state,action) => {
            state.username = action.payload;
        }
    }
});


export const { setUsername } = slice.actions;

export default slice.reducer;


