import React from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';

const withAuth = (Component) => {
  class WithAuth extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      console.log(this.props);
      const {isAuthorized} = this.props;

      if (!isAuthorized) {
        return <Redirect to='/login'/>;
      }
      return <Component {...this.props}/>;
    }
  }

  WithAuth.propTypes = {
    isAuthorized: PropTypes.bool.isRequired
  };

  return WithAuth;
};

export default withAuth;
