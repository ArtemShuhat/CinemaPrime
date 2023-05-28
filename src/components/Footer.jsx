// import React from "react";

// const Footer = (props) => {
//   return (
//     <footer className="footer">
//       <p>Это футер</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bgFooter">
      <footer className="text-center text-white">
        <div className="container p-4">
          <div className="footer-content">
            <div>
              <RiMovie2Fill className="logo-icon" />
              <span className="logo-text">CinemaPrime</span>
            </div>
            <div className="footer-links">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Footer;
