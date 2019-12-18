import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from "../header/header.jsx";
import {Operations} from "../../reducer.js";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.authorizeData = {
      email: ``,
      password: ``,
    };

    this._handleChangeInputPassword = this._handleChangeInputPassword.bind(this);
    this._handleChangeInputEmail = this._handleChangeInputEmail.bind(this);
    this._handleSubmitLoginForm = this._handleSubmitLoginForm.bind(this);
  }

  _checkInput(input) {
    if (input.length !== 0) {
      return true;
    }
    return false;
  }

  _validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2})$/;
    if (reg.test(email) !== false) {
      return false;
    }
    return true;
  }

  _handleChangeInputEmail(evt) {
    if (this._checkInput(evt.target.value)) {
      this.authorizeData.email = evt.target.value;
    }
  }

  _handleChangeInputPassword(evt) {
    if (this._checkInput(evt.target.value)) {
      this.authorizeData.password = evt.target.value;
    }
  }

  _handleSubmitLoginForm(evt) {
    evt.preventDefault();
    if (this.authorizeData.email && this.authorizeData.password) {
      if (this._validateEmail(this.authorizeData.email) === true) {
        this.props.setUserData(this.authorizeData.email, this.authorizeData.password);
        this.props.loadFavorites();
        this.props.history.push(`/`);
      }
    }
  }

  render() {

    return (
      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this._handleSubmitLoginForm}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={this._handleChangeInputEmail} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={this._handleChangeInputPassword}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link to="/" className="locations__item-link">
                  <span>Amsterdam</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignIn.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func,
  loadFavorites: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorized: state.isAuthorized,
  userData: state.userData,
  sendCredentials: state.setUserData,
});

const mapDispatchToProps = {
  setAuthorizationFlag: () => Operations.setAuthorizationFlag(true),
  setUserData: (email, password) => Operations.setUserData(email, password),
  loadFavorites: Operations.loadFavorites,
};

export {SignIn};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

