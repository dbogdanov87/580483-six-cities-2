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

    this._inputPasswordChangeHandler = this._inputPasswordChangeHandler.bind(this);
    this._inputEmailChangeHandler = this._inputEmailChangeHandler.bind(this);
    this._submitLoginFormHandler = this._submitLoginFormHandler.bind(this);
  }

  _checkInput(input) {
    if (input.length !== 0) {
      return true;
    }
    return false;
  }

  _inputEmailChangeHandler(evt) {
    if (this._checkInput(evt.target.value)) {
      this.authorizeData.email = evt.target.value;
    }
  }

  _inputPasswordChangeHandler(evt) {
    if (this._checkInput(evt.target.value)) {
      this.authorizeData.password = evt.target.value;
    }
  }

  _submitLoginFormHandler(evt) {
    evt.preventDefault();
    if (this.authorizeData.email && this.authorizeData.password) {
      this.props.setUserData(this.authorizeData.email, this.authorizeData.password);
      this.props.history.push(`/`);
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
              <form className="login__form form" action="#" method="post" onSubmit={this._submitLoginFormHandler}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={this._inputEmailChangeHandler} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={this._inputPasswordChangeHandler}/>
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
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorized: state.isAuthorized,
  userData: state.userData,
  sendCredentials: state.setUserData,
});

const mapDispatchToProps = {
  setAuthorizationFlag: () => Operations.setAuthorizationFlag(true),
  setUserData: (email, password) => Operations.setUserData(email, password),
};

export {SignIn};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

