import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/destinationReducer/destinationActions";
import { flightNumberSelector } from "../store/selectors";

import "./search.scss";

const Search = ({ flightNumber, setFlightNumber }) => {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value && searchParams.get("fligthNumber")) {
      setFlightNumber(value);
    }
    if (!value) {
      return;
    }
    setFlightNumber(value);
    searchParams.set("fligthNumber", value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const historyValue = searchParams.get("fligthNumber");
    historyValue && setFlightNumber(historyValue);
  }, [searchParams.get("fligthNumber")]);

  useEffect(() => {
    flightNumber && setValue(flightNumber);
    !flightNumber && setSearchParams(searchParams.delete("fligthNumber"));
  }, [flightNumber]);

  return (
    <div className="search">
      <h1 className="search__title">SEARCH FLIGHT</h1>
      <form className="search__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="destination"
          className="search__input"
          placeholder="Airline, destination or flight #"
          value={value}
          onChange={(e) => setValue(e.target.value.toUpperCase())}
        />
        <button type="submit" className="search__btn">
          SEARCH
        </button>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    flightNumber: flightNumberSelector(state),
  };
};

const mapDispatch = {
  setFlightNumber: actions.setFlightNumber,
};

export default connect(mapState, mapDispatch)(Search);
