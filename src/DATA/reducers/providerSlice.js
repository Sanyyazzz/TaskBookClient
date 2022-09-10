import {createAction, createSlice} from "@reduxjs/toolkit";

export const providerSlice = createSlice({
    name: 'provider',
    initialState: {
        providers:{
            provider: "sql"
        }
    },

    reducers: {
        setProvider (state, action) {
            state.providers = {provider: action.payload};
            return state;
        },

        changeProvider (state, action) {
            state.providers = {provider: action.payload};
            return state;
        }
    }
})

export const { setProvider, changeProvider } = providerSlice.actions;

export const getProviderNameApiRequest = createAction('provider/getProvider/api/request');
export const changeProviderApiRequest = createAction('provider/changeProvider/api/request');

export default providerSlice.reducer;