import React from "react";
import PropTypes from "prop-types";

import {SORTED_OPTIONS} from "../../constants.js";

const SortingOffers = (props) => {
  const {
    sortingName,
    isOpenSorting,
    toggleSortingClickHandler,
    sortingSelectionClickHandler
  } = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => toggleSortingClickHandler()}>
        {sortingName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={
        isOpenSorting
          ? `places__options places__options--custom places__options--opened`
          : `places__options places__options--custom places__options`
      }
      >
        {SORTED_OPTIONS.map(({id, name}) => (
          <li
            className={
              name === {sortingName}
                ? `places__option places__option--active`
                : `places__option`
            }
            key={id}
            tabIndex="0"
            onClick={
              () => {
                sortingSelectionClickHandler(name);
              }
            }>
            {name}
          </li>
        ))}
      </ul>
    </form>
  );
};

SortingOffers.propTypes = {
  sortingName: PropTypes.string.isRequired,
  isOpenSorting: PropTypes.bool.isRequired,
  toggleSortingClickHandler: PropTypes.func.isRequired,
  sortingSelectionClickHandler: PropTypes.func.isRequired,
};

export default SortingOffers;
