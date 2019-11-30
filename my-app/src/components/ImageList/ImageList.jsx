import React, { Component } from "react";
import { Image } from ".././Image";
import "./ImageList.css";

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 4
    };
  }

  nextItems = event => {
    event.preventDefault();
    const { images } = this.props;
    const { startIndex, endIndex } = this.state;
    endIndex + 4 <= images.length
      ? this.setState(() => ({
          startIndex: startIndex + 4,
          endIndex: endIndex + 4
        }))
      : this.setState(() => ({
          startIndex: startIndex + 4,
          endIndex: images.length
        }));
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
    console.log(this.state);
    return <div className="image-list">{this.renderFunctionality()}</div>;
  }
}

export default ImageList;
