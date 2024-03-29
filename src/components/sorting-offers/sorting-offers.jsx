import React from "react";
import PropTypes from "prop-types";

import {SORTED_OPTIONS} from "../../constants.js";

class SortingOffers extends React.PureComponent {
  constructor(props) {
    super(props);

    this.sortTitleRef = React.createRef();
  }

  render() {
    const {
      sortingName,
      isOpenSorting,
      onClickToggleSorting,
      onClickSortingSelection
    } = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={() => onClickToggleSorting()} ref={this.sortTitleRef}>
          {sortingName}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={
          isOpenSorting
            ? `places__options places__options--custom places__options--opened`
            : `places__options places__options--custom places__options`
        }
        >
          {SORTED_OPTIONS.map(({ID, NAME}) => (
            <li
              className={
                NAME === {sortingName}
                  ? `places__option places__option--active`
                  : `places__option`
              }
              key={ID}
              tabIndex="0"
              onClick={
                () => {
                  onClickSortingSelection(NAME);
                }
              }>
              {NAME}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

SortingOffers.propTypes = {
  sortingName: PropTypes.string.isRequired,
  isOpenSorting: PropTypes.bool.isRequired,
  onClickToggleSorting: PropTypes.func,
  onClickSortingSelection: PropTypes.func,
};

export default SortingOffers;
