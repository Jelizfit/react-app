import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getWeather, defaultSearchParams } from '../services/apiService';

function SearchForm() {

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event);

        const data = {
            lat: event.target.lat.value,
            lon: event.target.lon.value,
            units: event.target.units.value,
            lang: event.target.lang.value,
        };

        const weather = await getWeather(data);
        const response = await weather.json();
        console.log('response', response)
        console.log(data)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Latitude</Form.Label>
                <Form.Control type="text" name="lat" placeholder="41.94395" defaultValue={defaultSearchParams.lat} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Longetude</Form.Label>
                <Form.Control type="text" name="lon" placeholder="2.12453" defaultValue={defaultSearchParams.lon} />
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
                        defaultChecked={defaultSearchParams.units === unit}
                    />
                ))}
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Language</Form.Label>
                <Form.Select name="lang" defaultValue={defaultSearchParams.lang}>
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