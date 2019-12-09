import React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1,
      };
      this._itemMouseEnterHandler = this._itemMouseEnterHandler.bind(this);
      this._itemMouseOutHandler = this._itemMouseOutHandler.bind(this);
    }

    _itemMouseEnterHandler(id) {
      this.setState({
        activeItem: id,
      });
    }

    _itemMouseOutHandler() {
      this.setState({
        activeItem: -1,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeItem={this.state.activeItem}
        mouseEnterHandler={this._itemMouseEnterHandler}
        mouseLeaveHandler={this._itemMouseOutHandler}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
