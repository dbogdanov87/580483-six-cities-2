import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.authorizeData = {
      email: ``,
      password: ``,
    };

    this._inputChangeHandler = this._inputChangeHandler.bind(this);
    this._submitLoginFormHandler = this._submitLoginFormHandler.bind(this);
  }

  _inputChangeHandler(evt) {
    const {name, value} = evt.target;
    this.authorizeData[name] = value;
  }

  _submitLoginFormHandler(evt) {
    evt.preventDefault();
  }

  render() {
    const {
      city,
      userEmail,
      isAuthorize,
    } = this.props;
    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      {
                        isAuthorize
                          ? <span className="header__login">{userEmail}</span>
                          : <span className="header__login">Sign in</span>
                      }
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this._submitLoginFormHandler}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={this._inputChangeHandler} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={this._inputChangeHandler}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignIn.propTypes = {
  city: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  isAuthorize: PropTypes.bool.isRequired,
};

export default SignIn;

