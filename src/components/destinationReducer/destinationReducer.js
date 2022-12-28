const initialState = {
  flightNumber: "",
  allFlights: {
    departure: [],
    arrival: [],
  },
  date: new Date(),
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FLIGHT_NUMBER":
      return {
        ...state,
        flightNumber: action.payload,
      };
    case "SET_ALL_FLIGHTS":
      return {
        ...state,
        allFlights: action.payload,
      };
    case "SET_NEW_DATE":
      return {
        ...state,
        date: new Date(action.payload),
      };

    default:
      return state;
  }
};

export { destinationReducer };
//"01-11-2022"
