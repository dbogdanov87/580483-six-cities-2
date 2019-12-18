import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withSorted = (Component) => {
  class WithSorted extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpenSorting: false,
      };
      this.handleToggleSortingClick = this.handleToggleSortingClick.bind(this);

    }

    handleToggleSortingClick() {
      const {isOpenSorting} = this.state;
      this.setState({isOpenSorting: !isOpenSorting});
    }

    render() {
      const {isOpenSorting} = this.state;

      return (
        <Component
          {...this.props}
          isOpenSorting={isOpenSorting}
          onClickToggleSorting={this.handleToggleSortingClick}

        />
      );
    }
  }
  return WithSorted;
};

withSorted.propTypes = {
  sortingName: PropTypes.string.isRequired,
  handleToggleSortingClick: PropTypes.func.isRequired,
};

export default withSorted;
