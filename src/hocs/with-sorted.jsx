import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withSorted = (Component) => {
  class WithSorted extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpenSorting: false,
      };
      this.toggleSortingClickHandler = this.toggleSortingClickHandler.bind(this);
    }

    toggleSortingClickHandler() {
      const {isOpenSorting} = this.state;
      this.setState({isOpenSorting: !isOpenSorting});
    }

    render() {
      const {isOpenSorting} = this.state;

      return (
        <Component
          {...this.props}
          isOpenSorting={isOpenSorting}
          toggleSorting={this.toggleSortingClickHandler}
        />
      );
    }
  }
  return WithSorted;
};

withSorted.propTypes = {
  sortingName: PropTypes.string.isRequired,
  onSortByClick: PropTypes.func.isRequired,
};

export default WithSorted;
