import React from "react";
import moment from "moment";

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
  <>
    <div className="card" style={{ width: "40em" }}>
      <div className="card-header">
        <div className="row">
          <div className="col-11">
            <h2 className="card-title">{weatherData.name}</h2>
          </div>
          <div className="col-1">
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-info" onClick={refresh}>
                <i className="fa-solid fa-rotate" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <h5 className="card-title">
              {moment().format("dddd")}, <span>{moment().format("LL")}</span>
            </h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <h5 className="card-title">
              <img
                src={
                  "http://openweathermap.org/img/wn/"+
                  weatherData.weather[0].icon +
                  ".png"
                }
                alt="icon"
              />
              {weatherData.weather[0].main}
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p className="card-text">
              Temperature: {weatherData.main.temp} &deg;C
            </p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="card-text">Humidity: {weatherData.main.humidity} %</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p className="card-text">
              Clouds: {weatherData.clouds.all} %
            </p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="card-text">
              Wind Speed: {weatherData.wind.speed} miles/hour
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p className="card-text">
              Sunrise:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <p className="card-text">
              Sunset:{" "}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default WeatherCard;
