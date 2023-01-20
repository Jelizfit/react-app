import { createAction, createReducer, configureStore } from '@reduxjs/toolkit'

// redux - это state обработчик, для разных библиотек. 
// Основы redux очень схожи с react state.
// Как и у useState у редукс есть изначальное состояние, функция и функция для изменения состояния. 
// 
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
    errorMessage: null,
};
// Функция изменения состояния в редукс - называет 'Action'.
// Action создает объект, в котором есть его тип и объект payload в котором будут храниться новые данные.

export const setSearchParams = createAction('setSearchParams');
export const setShowSearchBar = createAction('setShowBar');
export const setForecastSelectedData = createAction('setForecastSelectedData')
export const setErrorMessage = createAction('setErrorMessage')

// Редусер используется для определения, что будет делать action,
// Мы создаем функции с названием actiona и в которых описываем, что произойдет. 
// В нашем случае мы меняем состояние.
const reducer = createReducer(initialState, {
    [setSearchParams]: (iState, action ) => {
      iState.searchParams = action.payload;  
    },
    [setShowSearchBar]: (iState, action ) => {
        iState.showSearchBar = action.payload;  
    },
    [setForecastSelectedData]: (iState, action ) => {
        iState.forecastSelectedData = action.payload;  
    },
    [setErrorMessage]: (iState, action ) => {
        iState.errorMessage = action.payload;  
    },
});
// store - это облако, где хранится вся информация о состоянии. 
export const store = configureStore({ reducer });
