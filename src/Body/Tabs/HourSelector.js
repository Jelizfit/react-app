import ButtonGroup from "react-bootstrap/ButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { setForecastSelectedData } from "../../services/stateService";

// В каждый компонент можно передать properties следующим образом:
// <komponent props1="1" props2={const} />
// Принимаем в компоненте пропертис как мы принимаем аргументы в любой функции. Т.е в скобках 
// декларируем переменную function komponent(props)
// Все переданные пропертис в компонент собираются в объект.
// Внутри компонента properties не возможно изменить.

// В каждом компоненте есть свое состояние.
// Состояние - это внутренние данные компонента.
// Для работы с состоянием мы используем react hook useState.
// В useState мы передаем изначальное значение состояния. (null)
// useState hook возращает массив из двух свойств.
// 1-ое переменная, которая содержит в себе значение, переданное в useState.
// 2-ое функция, которая меняет первое значение или состояние.
// При запуске изменения состояния, компонент перерисовывается и новое значение в состояние передается.
// Все реакт хуки начинаются со слова 'use'.
// Все изменяющие состояния функции начинаются со слова 'set'.
// 


function HourSelector({ hours }) {
    const [selectedHour, setSelectedHour] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        if (hours.length) {
            dispatch(setForecastSelectedData(hours[0].item))
            setSelectedHour(hours[0].hour);
        }
    }, [hours, dispatch, setSelectedHour]);

    const handleOnChangeHours = (hour, item) => {
        setSelectedHour(hour);
        dispatch(setForecastSelectedData)
    };

    return (
        <ButtonGroup className="w-100">
            {hours.map(({ hour, item }, idx) => (
                <ToggleButton
                    key={idx}
                    id={`hour-${idx}`}
                    type="radio"
                    variant="outline-primary"
                    name="hour"
                    value={hour}
                    checked={hour === selectedHour}
                    onChange={() => handleOnChangeHours(hour, item)}
                >
                    {hour}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
}

export default HourSelector;