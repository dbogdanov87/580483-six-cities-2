import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withSorted = (Component) => {
  class WithSorted extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpenSorting: false,
      };
      this.toggleSortingClickHandle = this.toggleSortingClickHandle.bind(this);

    }

    toggleSortingClickHandle() {
      const {isOpenSorting} = this.state;
      this.setState({isOpenSorting: !isOpenSorting});
    }

    render() {
      const {isOpenSorting} = this.state;

      return (
        <Component
          {...this.props}
          isOpenSorting={isOpenSorting}
          toggleSortingClickHandler={this.toggleSortingClickHandle}

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

export default withSorted;
