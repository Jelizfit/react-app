import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './services/stateService';

// Здесь мы берем объект DOM (document) в котором вся структура нашего imde.html. 
// Из него выбираем элемент div у которого id = root и оборачиваем его в ReactDom

// ReactDOM создает виртуальный DOM на сервере и в него рендерит или отрисовывает все
// что находится в нашем React приложении. 

// Render т.е. отрисовка - это процедура перехода с react компонента в чистый js i HTML.

// Provider компонент - это вспомогательный компонент react-redux для работы с redux state.
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
