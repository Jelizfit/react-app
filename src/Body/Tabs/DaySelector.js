
import { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton";
import HourSelector from "./HourSelector";
import moment from "moment"

function DaySelector({
    data,
    getCurrentData,
}) {
    const [selectedDay, setSelectedDay] = useState(0);
    const [days, setDays] = useState([])
    const [hours, setHours] = useState([]);

// useEffect - это реакт хук, который помогает работать с данными компонента.
// Он запускается сразу после того как компонент закончит отрисовку/рендер.
// Также useEffect принимает массив с зависимостями, которые могут контролировать запуск useEffect.
// Если один из зависимости поменяет значение, то useEffect запускается.
// useEffect не запускает новую отрисовку. о гаранирует, что если внутри него меняет состояние,
// то отрисовка произойдет только 1 раз.
// Если дать пустой список зависимостей [], то useEffect работает только один раз после первой отрисовки 
// компонента и больше никогда.


    useEffect(() => {
        const firstDay = moment.unix(data?.list[0].dt).format("DD")
        setSelectedDay(firstDay);

        const hours = [];
        const days = [];

        getCurrentData((item, day, hour) => {
            if (!days.includes(day)) {
                days.push(day)
            }
            if (!hours.includes(hour) && day === firstDay) {
                hours.push({ hour, item: { ...item, coord: data.city.coord } });
            }
        });
        setDays(days);
        setHours(hours);

    }, [data, setSelectedDay, getCurrentData]);

    const handleOnChangeDays = (event) => {
        setSelectedDay(event.currentTarget.value);
        const hours = [];

        getCurrentData((item, day, hour) => {
            if (!hours.includes(hour) && day === event.currentTarget.value) {
                hours.push({ hour, item: { ...item, coord: data.city.coord } });
            }
        });

        setHours(hours);
    };
    return (
        <>
            <ButtonGroup className="w-100">
                {days.map((day, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`day-${idx}`}
                        type="radio"
                        variant="outline-primary"
                        name="day"
                        value={day}
                        checked={day === selectedDay}
                        onChange={handleOnChangeDays}
                    >
                        {day}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <HourSelector
                hours={hours}
                selectedDay={selectedDay}
            />
        </>
    );
}
export default DaySelector;