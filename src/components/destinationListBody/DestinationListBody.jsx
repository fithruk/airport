import { useLocation } from "react-router-dom";
import moment from "moment";

import "./destinationListBody.scss";

const DestinationListBody = ({ flightsArray }) => {
  let location = useLocation();

  if (flightsArray.length === 0) {
    return (
      <h2 style={{ marginTop: "6vw", textAlign: "center" }}>No Flights</h2>
    );
  }

  return (
    <table className="main-table-list">
      <thead className="main-table-list__header">
        <tr className="main-table-list__row">
          <th className="main-table-list__item">Terminal</th>
          <th className="main-table-list__item">Sredule</th>
          <th className="main-table-list__item">Destination</th>
          <th className="main-table-list__item">Status</th>
          <th className="main-table-list__item">Airline</th>
          <th className="main-table-list__item">Flight</th>
        </tr>
      </thead>
      <tbody className="main-table-list__body">
        {flightsArray.map((flightItem) => (
          <View
            flightItem={flightItem}
            path={location.pathname}
            key={flightItem.ID}
          />
        ))}
      </tbody>
    </table>
  );
};

const View = ({ flightItem, path }) => {
  const { name, logoSmallName, term, flight } = flightItem;

  const toggleStatus = flightItem.timeDepShedule
    ? flightItem.timeDepShedule
    : flightItem.timeArrShedule;

  const toggleCity = flightItem.airportToIDCity_en
    ? flightItem.airportToIDCity_en
    : flightItem.airportFromIDCity_en;

  const viewString = path === "/arrives" ? "Landed" : "Departed at";

  return (
    <tr className="main-table-list__row">
      <td className="main-table-list__item-body">{term}</td>
      <td className="main-table-list__item-body">
        {moment(new Date(toggleStatus)).format("H:mm")}
      </td>
      <td className="main-table-list__item-body">{toggleCity}</td>
      <td className="main-table-list__item-body">
        {viewString} {moment(new Date(toggleStatus)).format("H:mm")}
      </td>
      <td className="main-table-list__item-body logo-cell">
        <img
          src={logoSmallName}
          alt="logo"
          className="main-table-list__item-body-logo"
        />
        {name}
      </td>
      <td className="main-table-list__item-body">{flight}</td>
    </tr>
  );
};

export default DestinationListBody;
