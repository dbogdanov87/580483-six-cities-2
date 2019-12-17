import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {MIN_LENGTH_COMMENT_REVIWS, MAX_LENGTH_COMMENT_REVIEWS} from "../constants.js";

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

      this._starsChangeHandler = this._starsChangeHandler.bind(this);
      this._submitHandler = this._submitHandler.bind(this);
      this._textAreaChangeHandler = this._textAreaChangeHandler.bind(this);
    }

    _starsChangeHandler(evt) {
      if (evt.target.id !== 0) {
        this.setState({
          isStarsChosen: true,
          stars: this._getRating(evt.target.id)
        });

        if (this.textRef.current.content) {
          this.buttonRef.current.disabled = false;
        }
      }
    }

    _textAreaChangeHandler(evt) {
      this.setState({textComment: evt.target.value});
      if (this.state.textComment.length >= MIN_LENGTH_COMMENT_REVIWS) {
        this.setState.isTextCorrect = true;
        this.buttonRef.current.disabled = true;

        if (this.state.isStarsChosen) {
          this.buttonRef.current.disabled = false;
        }
      }
      if (this.state.textComment.length >= MAX_LENGTH_COMMENT_REVIEWS) {
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

    _submitHandler(evt) {
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
        submitHandler={this._submitHandler}
        starsChangeHandler={this._starsChangeHandler}
        changeHandler={this._textAreaChangeHandler}
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
    onSubmitClick: PropTypes.func,
  };

  return WithFormSubmit;
};

export default withFormSubmit;
