import React from "react";
import PropTypes from "prop-types";

import {MIN_LENGTH_COMMENT_REVIEWS, MAX_LENGTH_COMMENT_REVIEWS} from "../constants.js";

const withFormSubmit = (Component) => {
  class WithFormSubmit extends React.PureComponent {
    constructor() {
      super();
      this.state = {
        isTextCorrect: false,
        isStarsChosen: false,
        isValid: false,
        textComment: ``,
        stars: 0,
      };

      this.formRef = React.createRef();
      this.starsRef = React.createRef();
      this.textRef = React.createRef();
      this.starRef = React.createRef();
      this.buttonRef = React.createRef();

      this._handleStarsChange = this._handleStarsChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChangeTextArea = this._handleChangeTextArea.bind(this);
    }

    _handleStarsChange(evt) {
      if (evt.target.id !== 0) {
        this.setState({
          isStarsChosen: true,
          stars: this._getRating(evt.target.id)
        });

        if (this.setState.isTextCorrect) {
          console.log(111);
          this.buttonRef.current.disabled = false;
        }
      }
    }

    _handleChangeTextArea(evt) {
      this.setState({textComment: evt.target.value});
      if (this.state.textComment.length >= MIN_LENGTH_COMMENT_REVIEWS
        || this.state.textComment.length <= MAX_LENGTH_COMMENT_REVIEWS) {
        this.setState.isTextCorrect = true;
        if (this.state.isStarsChosen) {
          this.buttonRef.current.disabled = false;
        }
      }
      if (this.state.textComment.length >= MAX_LENGTH_COMMENT_REVIEWS
        || this.state.textComment.length <= MIN_LENGTH_COMMENT_REVIEWS) {
        this.buttonRef.current.disabled = true;
      }
    }

    _getRating(value) {
      if (value === `1-star`) {
        return 1;
      } else if (value === `2-stars`) {
        return 2;
      } else if (value === `3-stars`) {
        return 3;
      } else if (value === `4-stars`) {
        return 4;
      } else if (value === `5-stars`) {
        return 5;
      }
      return null;
    }

    _handleSubmit(evt) {
      evt.preventDefault();
      this.formRef.current.disabled = true;

      const comment = {
        rating: this.state.stars,
        comment: this.state.textComment
      };
      if (this.setState.isTextCorrect && this.state.isStarsChosen) {
        this.props.submitClick(comment);
        this.formRef.current.reset();
        this.textRef.current.value = ``;
        this.setState.textComment = ``;
        this.buttonRef.current.disabled = true;
        this.setState.stars = 0;

      } else {
        this.formRef.current.disabled = false;
        this.formRef.current.classList.add(`apply-shake`);
      }
    }

    render() {
      return <Component
        {...this.props}
        onSubmitForm={this._handleSubmit}
        onChangeStars={this._handleStarsChange}
        onChangeTextArea={this._handleChangeTextArea}
        formRef={this.formRef}
        starsRef={this.starsRef}
        textRef={this.textRef}
        starRef={this.starRef}
        buttonRef={this.buttonRef}
        textComment={this.state.textComment}
      />;
    }

  }

  WithFormSubmit.propTypes = {
    submitClick: PropTypes.func,
  };

  return WithFormSubmit;
};

export default withFormSubmit;
