import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function Footer() {
  return (
    <footer className="landing_footer">
      <div className="footer_top">
        <div>
          <h3 onClick={() => scroll.scrollToTop({ smooth: 'easeInOutCubic', duration: 1500 })} title="Back to top">
            MyHouse
          </h3>
          <span>
            <Link to="/ourteam">Team</Link>
          </span>
          <span>
            <a href="https://github.com/labs12-real-estate" target="blank">
              Repository
            </a>
          </span>
        </div>
        <div>
          <span>Connect</span>
          <a href="https://twitter.com/_My_House__" target="blank">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/myhouseofficial/" target="blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://github.com/labs12-real-estate/labs12-real-estate-FE" target="blank">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.facebook.com/MyHouse-338353660197554/" target="blank">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://www.linkedin.com/company/36011646/admin/" target="blank">
            <i className="fab fa-linkedin" />
          <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/myhouseofficial/" target="blank">
          <i className="fab fa-instagram" />
          </a>
          <a href="https://github.com/labs12-real-estate" target="blank">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.facebook.com/MyHouse-338353660197554/" target="blank">
          <i className="fab fa-facebook" />
          </a>
          <a href="https://www.linkedin.com/company/36011646/admin/" target="blank">
          <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="footer_bottom">
        <span>© 2019 MyHouse</span>
        <span>Privacy Policy</span>
        <span>Terms &amp; Conditions</span>
      </div>
    </footer>
  );
}

export default Footer;
