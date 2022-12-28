const link = "https://api.iev.aero/api/flights/";

const getFlights = async (properlyDate) => {
  const res = await fetch(`${link}${properlyDate}`);

  return res.ok && res.json();
};

export { getFlights };
