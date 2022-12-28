import { BrowserRouter as Router } from "react-router-dom";

import "./page.scss";
import Header from "../header/Header";
import Search from "../search/Search";
import DestinationList from "../destinationList/DestinationList";
import Footer from "../footer/Footer";

const Page = () => {
  return (
    <Router>
      <section className="page">
        <Header />
        <Search />
        <DestinationList />
      </section>
      <Footer />
    </Router>
  );
};

export default Page;
