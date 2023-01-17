import ButtonGroup from "react-bootstrap/ButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { setForecastSelectedData } from "../../services/stateService";

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