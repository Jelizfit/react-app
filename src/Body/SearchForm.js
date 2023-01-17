import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { setSearchParams } from '../services/stateService';
import { useState } from 'react'

function SearchForm({ handleCloseBar }) {
    const [selectedCity, setSelectedCity] = useState(null)
    const searchParams = useSelector((state) => state.searchParams);
    const dispatch = useDispatch();

    const cities = [
        { label: 'Tallinn', lat: 59.4370, lon: 24.7536 },
        { label: 'Tartu', lat: 58.3780, lon: 26.7290 },
        { label: 'Sillamäe', lat: 59.3970, lon: 27.7633 },
        { label: 'Kuressaare', lat: 58.2550, lon: 22.4919 },
    ];

    const units = [
        'standard',
        'metric',
        'imperial',
    ];

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fi', label: 'Finnish' },
        { code: 'ru', label: 'Russian' },
        { code: 'it', label: 'Italian' },
        { code: 'fr', label: 'French' },
        { code: 'zh_cn', label: 'Chonese Simplified' },
    ];

    const handleCitySelect = (event) => {
        const selectedCityObject = cities.find(
            (city) => city.label === event.target.value
        );
        setSelectedCity(selectedCityObject);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const params = {
            lat: event.target.lat.value,
            lon: event.target.lon.value,
            units: event.target.units.value,
            lang: event.target.lang.value,
        };

        dispatch(setSearchParams({ ...params, city: selectedCity }));

        handleCloseBar();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="my-4">
                <Form.Label>City</Form.Label>
                <Form.Select name="city" defaultValue={searchParams.city} onChange={handleCitySelect}>
                    {cities.map((city, i) => (
                        <option key={city.label} value={city.label}>
                            {city.label}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                    type="text"
                    name="lat"
                    placeholder="41.94395"
                    value={selectedCity?.lat || searchParams.lat}
                    onChange={() => { }}
                />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Longetude</Form.Label>
                <Form.Control
                    type="text"
                    name="lon"
                    placeholder="2.12453"
                    value={selectedCity?.lon || searchParams.lon}
                    onChange={() => { }}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Units of measurement</Form.Label>
                {units.map((unit, i) => (
                    <Form.Check
                        type="radio"
                        id={unit}
                        label={unit}
                        key={unit}
                        name="units"
                        value={unit}
                        defaultChecked={searchParams.units === unit}
                    />
                ))}
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Language</Form.Label>
                <Form.Select name="lang" defaultValue={searchParams.lang}>
                    {languages.map((language, i) => (
                        <option key={language.code} value="{language.code">{language.label}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}


export default SearchForm;