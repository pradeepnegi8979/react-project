import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
function Weather() {
  let [city, setCity] = useState("");
  let [wDetails, setwDetails] = useState();
  let [isLoading, setisLoading] = useState(false);
  let urlField = "https://openweathermap.org/img/w";
  let getData = (event) => {
    setisLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0619db03cc6d932709cb3db9c565d9b4&units=metric`
    )
      .then((res) => res.json())
      .then((finalResponse) => {
        //console.log(finalResponse);
        if (finalResponse.cod == "404") {
          setwDetails(undefined);
        } else {
          setwDetails(finalResponse);
        }
        setisLoading(false);
      });
    event.preventDefault();
    setCity("");
  };
  useEffect(() => {
    console.log("welcome to weather");
  }, []);
  return (
    <section className="weatherSection">
      <Container>
        <Row>
          <div className="searchWeather">
            <form onSubmit={getData}>
              <div className="searchBox">
                <input
                  type="text"
                  placeholder="Search City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-control"
                />
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="weatherOuter">
            <div className="weatherBox position-relative">
              <img
                src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
                className={`img-fluid loading-img ${isLoading ? "" : "hidden"}`}
                alt=""
              />
              {wDetails !== undefined ? (
                <>
                  <h2>
                    {wDetails.name} <sup>{wDetails.sys.country}</sup>
                  </h2>
                  <h3>{wDetails.main.temp}</h3>
                  <img
                    src={`${urlField}/${wDetails.weather[0].icon}.png`}
                    alt=""
                  />
                  <h5>{wDetails.weather[0].main}</h5>
                </>
              ) : (
                "no city found"
              )}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
export { Weather };
