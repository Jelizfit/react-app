import { createAction, createReducer, configureStore } from '@reduxjs/toolkit'

const initialState = {
    showSearchBar: false,
    searchParams: {
        lat: '59.4370',
        lon: '24.7536',
        units: 'metric',
        lang: 'en',
        city: 'Tallinn',
    },
    forecastSelectedData: null,
};

export const setSearchParams = createAction('setSearchParams');
export const setShowSearchBar = createAction('setShowBar');
export const setForecastSelectedData = createAction('setForecastSelectedData')
const reducer = createReducer(initialState, {
    [setSearchParams]: (iState, action ) => {
      iState.showSearchParams = action.payload;  
    },
    [setShowSearchBar]: (iState, action ) => {
        iState.searchParams = action.payload;  
    },
    [setForecastSelectedData]: (iState, action ) => {
        iState.searchParams = action.payload;  
    },
});

export const store = configureStore({ reducer });
