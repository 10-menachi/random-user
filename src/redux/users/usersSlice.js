import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://randomuser.me/api/?results=5"

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data.results;   
    } catch (error) {
        throw error;
    }
});

const initialState = {
    users: [],
    loading: false,
    error: null,
}
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

const usersReducer = usersSlice.reducer
export default usersReducer;