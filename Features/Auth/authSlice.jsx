import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	auth: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
        updateAuth: (state, action) => {
            state.auth = action.payload;
        }
	}
})

export const {updateAuth} = authSlice.actions
export const authReducer = authSlice.reducer