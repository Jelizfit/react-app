const apiUrl = 'https://api.openweathermap.org/data/2.5';

// process - это глобальный объект, в котором хранится информация о сервере.
// Свойство .env хранит в себе все переменные нашей среды.
// Переменные мы храним в файле '.env'
// Переменные мы называет со словом 'REACT_APP_' для того, чтобы реакт из в себя подтянул.

const apiKey = process.env.REACT_APP_API_KEY; 
export const defaultSearchParams = {
    lat: 58.595,
    lon: 25.0136,
    units: 'metric',
    lang: 'en',
};
// Для запросов на сервер используются асинхронные функции.
// Они предназначены для работы с promise (обещаниями).
// Запрос 'fetch' возвращает promise со статусом 'pending'
// Благодаря ключевому слову 'await' мы говорим нашему серверу, что ожидает ответ.
// После получения ответа с сервера, promise получает статус либо 'fullfiled' либо 'rejected'
// Что означает либо все хорошо, либо произошла ошибка.
// Обработка статусов происходит в try {} catch {};
// 'await' может использоваться только в функции асинхронной 'async' и только с промисами.

export async function getWeather(data = null) {
    const params = new URLSearchParams({
        ...(data || defaultSearchParams),
        appid: apiKey,
    });
    return await fetch(`${apiUrl}/weather?${params}`);
}

export async function getForecast(data = null) {
    const params = new URLSearchParams({
        ...(data || defaultSearchParams),
        appid: apiKey,
    });
    return await fetch(`${apiUrl}/forecast?${params}`)
}

