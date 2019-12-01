import React, { Component } from "react";
import { Image } from ".././Image";
import "./ImageList.css";

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  nextItems = event => {
    event.preventDefault();
    const { divided } = this.props;
    this.state.index + 1 < divided.length
      ? this.setState(() => ({ index: this.state.index + 1 }))
      : this.setState(() => ({ index: 0 }));
  };

  previousItems = event => {
    const { divided } = this.props;
    event.preventDefault();
    this.state.index > 0
      ? this.setState(() => ({ index: this.state.index - 1 }))
      : this.setState(() => ({ index: divided.length - 1 }));
  };

  renderFunctionality = () => {
    const { divided } = this.props;
    if (divided.length > 0) {
      return (
        <React.Fragment>
          <button className="previous" onClick={e => this.previousItems(e)}>
            {"<"}
          </button>
          {divided[this.state.index].map(
            ({ image, alt_description, urls, id }) => (
              <Image
                url={urls.regular}
                alt={alt_description}
                key={id}
                id={id}
              ></Image>
            )
          )}
          <button className="next" onClick={e => this.nextItems(e)}>
            {">"}
          </button>
        </React.Fragment>
      );
    }
  };

  render() {
    return <div className="image-list">{this.renderFunctionality()}</div>;
  }
}

export default ImageList;
