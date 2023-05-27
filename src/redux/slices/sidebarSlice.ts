import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setIsOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const {setIsOpen} = sidebarSlice.actions;

export default  sidebarSlice.reducer;