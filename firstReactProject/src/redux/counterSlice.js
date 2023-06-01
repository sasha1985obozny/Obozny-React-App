import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, {payload}=action) => {
            state.value += +payload;
        },
        decrement: (state, {payload}=action) => {
            state.value -= +payload;
        },
        reset: (state, {payload}=action) => {
            state.value = +payload;
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer