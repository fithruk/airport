import { useEffect } from "react";
import { NavLink, useSearchParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import "./destinationListHeader.scss";
import { recentDays } from "../utils";
import { dateSelector, flightNumberSelector } from "../store/selectors";
import * as actions from "../store/destinationReducer/destinationActions";

const activeLinkStyles = (prop) => {
  return {
    borderTopRightRadius: prop && "55px",
    borderTopLeftRadius: prop && "55px",
    backgroundColor: prop && "#ffffff",
    color: prop && "#1eb7ee",
  };
};

const DestinationListHeader = ({ date, setNewDate }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleChange = (e, dataAtr) => {
    if (dataAtr) {
      setNewDate(dataAtr);
      searchParams.set("data", moment(dataAtr).format("DD-MM-YYYY"));
      setSearchParams(searchParams);
      return;
    }
    setNewDate(e.target.value);
    searchParams.set("data", moment(e.target.value).format("DD-MM-YYYY"));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const handledDate = searchParams.get("data")
      ? moment(searchParams.get("data"), "DD-MM-YYYY").format("YYYY-MM-DD")
      : moment(date).format("YYYY-MM-DD");
    setNewDate(handledDate);

    searchParams.set("data", moment(handledDate).format("DD-MM-YYYY"));
    setSearchParams(searchParams);
  }, [date.getDate(), location.search]);

  return (
    <div className="list-header">
      <nav className="list-header__navigation">
        <NavLink
          to={`/departure`}
          style={({ isActive }) => activeLinkStyles(isActive)}
          className="list-header__nav-link list-header__nav-link--first"
        >
          <span className="list-header__nav-item-wrapper">
            <i className="fa-sharp fa-solid fa-plane-departure"></i>DEPARTURES
          </span>
        </NavLink>
        <NavLink
          to="/arrives"
          style={({ isActive }) => activeLinkStyles(isActive)}
          className="list-header__nav-link list-header__nav-link--last"
        >
          <span className="list-header__nav-item-wrapper">
            <i className="fa-solid fa-plane-arrival"></i>ARRIVES
          </span>
        </NavLink>
      </nav>
      <form className="list-header__form">
        <div className="list-header__form-item">
          <label htmlFor="dateId" className="label-date">
            <span className="current-date">{moment(date).format("D/MM")}</span>
            <br />
            <input
              className="list-header__date-input"
              type="date"
              name="date"
              id="dateId"
              value={moment(date).format("YYYY-MM-DD")}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="list-header__form-closest-dates">
          {recentDays.map(({ title, value }) => {
            const classNames =
              moment(value).format("DD-MM-YYYY") === searchParams.get("data")
                ? "list-header__form-closest-dates-item list-header__form-closest-dates-item--active"
                : "list-header__form-closest-dates-item";
            return (
              <div
                className={classNames}
                key={value}
                onClick={() => handleChange(null, new Date(value))}
              >
                <div className="list-header__form-closest-dates-item-date">
                  {moment(value).format("D/MM")}
                </div>
                <div className="list-header__form-closest-dates-item-day">
                  {title}
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    date: dateSelector(state),
    flightNumber: flightNumberSelector(state),
  };
};

const mapDispatch = {
  setNewDate: actions.setNewDate,
};

export default connect(mapState, mapDispatch)(DestinationListHeader);
