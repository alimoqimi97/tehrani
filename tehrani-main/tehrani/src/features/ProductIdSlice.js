import { createSlice } from "@reduxjs/toolkit";

export const pIdSlice = createSlice({
    name: "Product Id Slice",
    initialState: {
        selectedProductId: 0
    },
    reducers: {
        setSelectedProductId: (state,action) => {
            state.selectedProductId = action.payload;
        }
    }
});

export const { setSelectedProductId } = pIdSlice.actions;

export default pIdSlice.reducer;