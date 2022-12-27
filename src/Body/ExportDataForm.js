import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ExportDataForm() {

    const mode = [
        'json',
        'html',
        'xml',
    ];

    const handleSubmit = (event) => {
        event.preventDefault();

        const mode = event.target.mode.value;

        window.open('about:blank').document.write(mode)
    }
    return (
        <Form onSubmit={handleSubmit} className="mt-4">
            <h5 className="mb-5">Export</h5>
            <Form.Select name="mode" defaultValue="json">
                {mode.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </Form.Select>
            <Button className="w-100 mt-4" variant="warning" type="submit">
                Export
            </Button>
        </Form>
    );
}

export default ExportDataForm;