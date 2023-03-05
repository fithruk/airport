import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import * as selectors from "../store/selectors";
import * as actions from "../store/destinationReducer/destinationActions";

import "./destinationList.scss";
import DestinationListHeader from "../destinationLIstHeader/DestinationListHeader";
import DestinationListBody from "../destinationListBody/DestinationListBody";

const DestinationList = ({
  loadFlightsFromServer,
  departureArray,
  arrivalArray,
  dateSelector,
}) => {
  const date = moment(dateSelector).format("DD-MM-YYYY");
  const shouldRedirect = true;

  useEffect(() => {
    loadFlightsFromServer();
  }, [date]);
  return (
    <div className="destination-list-wrapper">
      <DestinationListHeader />
      <Routes>
        <Route
          path="/"
          element={shouldRedirect && <Navigate replace to={`/departure`} />}
        />
        <Route
          path="/departure"
          element={<DestinationListBody flightsArray={departureArray} />}
        />
        <Route
          path="/arrives"
          element={<DestinationListBody flightsArray={arrivalArray} />}
        />
      </Routes>
    </div>
  );
};

const mapState = (state) => {
  return {
    flightsArray: selectors.flightsSelector(state),
    departureArray: selectors.departureSelector(state),
    arrivalArray: selectors.arrivalSelector(state),
    dateSelector: selectors.dateSelector(state),
    flightNumberSelector: selectors.flightNumberSelector(state),
  };
};

const mapDispatch = {
  loadFlightsFromServer: actions.loadFlightsFromServer,
};

export default connect(mapState, mapDispatch)(DestinationList);
