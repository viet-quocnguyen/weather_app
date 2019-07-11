import React from "react";
import { Row, Col, Table } from "reactstrap";

function Weather(props) {
  const { data } = props;

  if (!data) {
    return <div />;
  }

  return (
    <Row>
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h2>{data.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="Weather Icon"
        />
        <span>{data.weather[0].main}:</span>
        &nbsp;
        <span>{data.main.temp}&deg;C</span>
        <Table hover>
          <tbody>
            <tr>
              <th>Wind</th>
              <td>{Math.floor(data.wind.speed)}km/h</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{data.main.humidity}%</td>
            </tr>
            <tr>
              <th>Max Temp</th>
              <td>{data.main.temp_max}&deg;C</td>
            </tr>
            <tr>
              <th>Min Temp</th>
              <td>{data.main.temp_min}&deg;C</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Weather;
