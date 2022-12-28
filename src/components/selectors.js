import { prapareDepartureData, prapareArrivalData } from "./utils";

const dateSelector = (state) => {
  return state.flights.date;
};

const flightsSelector = (state) => {
  return state.flights.allFlights;
};

const departureSelector = (state) => {
  const allFlights = flightsSelector(state);
  const flightNumber = flightNumberSelector(state);
  if (flightNumber) {
    return prapareDepartureData(allFlights.departure).filter(
      (flight) => flight.flight === flightNumber
    );
  }
  return prapareDepartureData(allFlights.departure);
};

const arrivalSelector = (state) => {
  const allFlights = flightsSelector(state);
  const flightNumber = flightNumberSelector(state);
  if (flightNumber) {
    return prapareDepartureData(allFlights.arrival).filter(
      (flight) => flight.flight === flightNumber
    );
  }

  return prapareArrivalData(allFlights.arrival);
};

const flightNumberSelector = (state) => {
  return state.flights.flightNumber;
};

export {
  dateSelector,
  flightsSelector,
  departureSelector,
  arrivalSelector,
  flightNumberSelector,
};
