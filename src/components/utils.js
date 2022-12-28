const today = new Date();
const yesterday = new Date().setDate(new Date().getDate() - 1);
const tomorrow = new Date().setDate(new Date().getDate() + 1);
const recentDays = [
  { title: "YESTERDAY", value: yesterday },
  { title: "TODAY", value: today },
  { title: "TOMORROW", value: tomorrow },
];

const prapareDepartureData = (arr) => {
  return arr.map(
    ({
      codeShareData,
      timeDepShedule,
      term,
      "airportToID.city_en": airportToIDCity_en,
      ID,
    }) => {
      const { codeShare, logo, airline } = codeShareData[0];
      const { name, logoName, logoSmallName, registrationTime, icao } =
        airline.en;
      return {
        flight: codeShare,
        logo: logo,
        name,
        logoName,
        logoSmallName,
        registrationTime,
        icao,
        term,
        timeDepShedule,
        airportToIDCity_en,
        ID,
      };
    }
  );
};

const prapareArrivalData = (arr) => {
  return arr.map(
    ({
      codeShareData,
      timeArrShedule,
      term,
      "airportFromID.city_en": airportFromIDCity_en,
      ID,
    }) => {
      const { codeShare, logo, airline } = codeShareData[0];
      const { name, logoName, logoSmallName, registrationTime, icao } =
        airline.en;
      return {
        flight: codeShare,
        logo: logo,
        name,
        logoName,
        logoSmallName,
        registrationTime,
        icao,
        term,
        timeArrShedule,
        airportFromIDCity_en,
        ID,
      };
    }
  );
};

export { recentDays, prapareDepartureData, prapareArrivalData };
