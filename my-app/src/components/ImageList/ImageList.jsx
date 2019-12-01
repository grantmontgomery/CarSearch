import React, { Component } from "react";
import { Image } from ".././Image";
import "./ImageList.css";

class ImageList extends Component {
  constructor(props) {
    super(props);
    let divided = [];
    for (let i = 0; i < this.props.images.length; i += 4) {
      i + 4 < this.props.images.length
        ? (divided = [...divided, this.props.images.slice(i, i + 4)])
        : (divided = [...divided, this.props.images.slice(i)]);
    }
    this.state = {
      divided: [...divided]
    };
  }
  nextItems = event => {
    event.preventDefault();
    const { images } = this.props;
  };

  previousItems = event => {
    event.preventDefault();
    const { images } = this.props;
    const { startIndex, endIndex } = this.state;
    if (endIndex === images.length && startIndex - 4 >= 0) {
      this.setState(() => ({
        startIndex: startIndex - 4,
        endIndex: startIndex
      }));
    } else if (startIndex - 4 >= 0) {
      this.setState(() => ({
        startIndex: startIndex - 4,
        endIndex: endIndex - 4
      }));
    }
  };

  renderFunctionality = () => {
    const { images } = this.props;
    if (images.length > 0) {
      return (
        <React.Fragment>
          <button className="previous" onClick={e => this.previousItems(e)}>
            {"<"}
          </button>
          {images.map(({ image, alt_description, urls, id }) => (
            <Image
              url={urls.regular}
              alt={alt_description}
              key={id}
              id={id}
            ></Image>
          ))}
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
