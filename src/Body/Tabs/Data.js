import Table from "react-bootstrap/Table";

function Data({ data }) {

    const roundTemp = (temp) => {
        if(temp) {
            return 0 < temp ? Math.ceil(temp) : Math.floor(temp);
        }
        return temp;
    };

    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td><b>Weather</b></td>
                    <td>{data?.weather[0].description}</td>
                    <td>{data?.weather[0].main}</td>
                </tr>
                <tr>
                    <td><b>Main</b></td>
                    <td>{roundTemp(data?.main.feels_like)}</td>
                    <td>{roundTemp(data?.main.temp)}</td>
                    <td>{roundTemp(data?.main.temp_min)}</td>
                    <td>{roundTemp(data?.main.temp_max)}</td>
                </tr>
                <tr>
                    <td><b>Wind</b></td>
                    <td>{data?.wind.speed}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Data;