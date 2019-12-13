import React from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';

const withAuth = (Component) => {
  class WithAuth extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {isUserAuth} = this.props;

      if (!isUserAuth) {
        return <Redirect to='/login'/>;
      }
      return <Component {...this.props}/>;
    }
  }

  WithAuth.propTypes = {
    isUserAuth: PropTypes.bool.isRequired
  };

  return WithAuth;
};

export default withAuth;
