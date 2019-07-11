import React, { Component } from "react";

import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Jumbotron,
  InputGroup,
  Input,
  Button,
  InputGroupAddon,
  FormGroup,
  Label
} from "reactstrap";

import Weather from "./Weather";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      cityList: [],
      newCityName: ""
    };
  }

  getCityList = () => {
    fetch("/api/cities")
      .then(res => res.json())
      .then(cities => {
        var cityList = cities.map(city => city.city_name);
        this.setState({
          cityList
        });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    fetch("/api/cities", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city: this.state.newCityName })
    })
      .then(res => res.json())
      .then(res => {
        this.getCityList();
        this.setState({
          newCityName: ""
        });
      });
  };

  getWeather = city => {
    fetch(`/api/weather/${city}`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          this.setState({
            weather: data
          });
        } else {
          this.setState({
            weather: null
          });
        }
      });
  };

  handleChangeCity = e => {
    this.getWeather(e.target.value);
  };

  componentDidMount() {
    this.getCityList();
  }

  render() {
    return (
      <div className="App">
        <Container className="centered">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">WeatherApp</NavbarBrand>
          </Navbar>
          <Row>
            <Col>
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">Weather App</h1>
                  <p className="lead">
                    See the current weather of your favorite cities
                  </p>
                  <InputGroup>
                    <Input
                      name="newCityName"
                      placeholder="New city name..."
                      value={this.state.newCityName}
                      onChange={this.handleChange}
                    />
                    <InputGroupAddon addonType="append">
                      <Button color="secondary" onClick={this.handleClick}>
                        Add City
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="weather">
                  <h4>Current Weather</h4>
                </Label>
                <Input
                  type="select"
                  id="weather"
                  onChange={this.handleChangeCity}
                >
                  {this.state.cityList.length > 0 ? (
                    <option>Select city</option>
                  ) : (
                    <option>No cities found</option>
                  )}
                  {this.state.cityList.map((city, index) => (
                    <option key={index}>{city}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Weather data={this.state.weather} />
        </Container>
      </div>
    );
  }
}

export default App;
