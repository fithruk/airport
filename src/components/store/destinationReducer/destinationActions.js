import moment from "moment";
//moment().format("DD-MM-YYYY");

import { dateSelector } from "../selectors";
import { getFlights } from "../../gateWays/services";

const setNewDate = (newDate) => {
  return {
    type: "SET_NEW_DATE",
    payload: newDate,
  };
};

const setAllFlights = (arrFlights) => {
  return {
    type: "SET_ALL_FLIGHTS",
    payload: arrFlights,
  };
};

const setFlightNumber = (value) => {
  return {
    type: "SET_FLIGHT_NUMBER",
    payload: value,
  };
};

const loadFlightsFromServer = () => {
  return async function (dispatch, getState) {
    try {
      const date = dateSelector(getState());
      const allFligths = await getFlights(moment(date).format("DD-MM-YYYY"));
      dispatch(
        setAllFlights({
          departure: [...allFligths.body.departure],
          arrival: [...allFligths.body.arrival],
        })
      );
    } catch (error) {
      alert(`Error ${error.name}, message: ${error.message}`);
      throw new Error(error);
    }
  };
};

export { setNewDate, loadFlightsFromServer, setFlightNumber };
