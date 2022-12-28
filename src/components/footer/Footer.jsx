import "./footer.scss";
import logoWhite from "../../images/logo_white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__lists-wrapper">
          <ul className="footer-list">
            <h5 className="footer-list__title">For passengers</h5>
            <li className="footer-list__item">Flight schedule</li>
            <li className="footer-list__item">Services</li>
            <li className="footer-list__item">Contacts</li>
            <li className="footer-list__item">Privacy policy</li>
            <li className="footer-list__item">Feedback form</li>
          </ul>
          <ul className="footer-list">
            <h5 className="footer-list__title">Corporate</h5>
            <li className="footer-list__item">Main page</li>
            <li className="footer-list__item">Ground Handling</li>
            <li className="footer-list__item">Airport characteristics</li>
            <li className="footer-list__item">Education Center</li>
            <li className="footer-list__item">Careers</li>
          </ul>
          <ul className="footer-list">
            <h5 className="footer-list__title">Press centre</h5>
            <li className="footer-list__item">Main page</li>
            <li className="footer-list__item">Latest news</li>
            <li className="footer-list__item">Social & Art Projects</li>
            <li className="footer-list__item">Financial reports</li>
            <li className="footer-list__item">Traffic statistics</li>
          </ul>
          <ul className="footer-list social">
            <h5 className="footer-list__title">Contact us</h5>
            <li className="footer-list__item">
              <a href="tel:+38 (044) 500 49 73" className="link">
                +38 (044) 500 49 73
              </a>
            </li>
            <ul className="footer-list social">
              <h5 className="footer-list__title">Follow us:</h5>
              <li className="footer-list__item social-wrapper">
                <a href="#" className="social-link-item">
                  <i className="fa-brands fa-facebook-f social-link-item"></i>
                </a>
                <a href="#" className="social-link-item">
                  <i className="fa-brands fa-twitter social-link-item"></i>
                </a>
                <a href="#" className="social-link-item">
                  <i className="fa-brands fa-instagram social-link-item"></i>
                </a>
                <a href="#" className="social-link-item">
                  <i className="fa-brands fa-youtube social-link-item"></i>
                </a>
                <a href="#" className="social-link-item">
                  <i className="fa-brands fa-linkedin social-link-item"></i>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="under-footer">
        <div className="under-footer__owner">
          <span>© 2011-2021s{<br />}«Kyiv» International Airport</span>
        </div>
        <div className="group">
          <div className="text">
            <span className="">
              Part of <strong>Ufuture</strong> {<br />}
              <strong>Investment Group</strong>
            </span>
          </div>
          <div className="logo-text-wrapper">
            <img src={logoWhite} alt="logo" className="logo-text-img" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
