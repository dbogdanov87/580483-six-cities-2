import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Header = (props) => {
  const {isAuthorized, userData} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={isAuthorized ? `/favorites` : `/login`} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {
                    isAuthorized
                      ? <span className="header__login">{userData.email}</span>
                      : <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool,
  userData: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorized: state.isAuthorized,
  userData: state.userData,
});

export {Header};
export default connect(mapStateToProps)(Header);
