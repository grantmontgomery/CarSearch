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
    const { startIndex } = this.state;
    const { endIndex } = this.state;
    if (startIndex + 4 < images.length) {
      this.setState(() => {
        startIndex: startIndex + 4;
        endIndex: endIndex + 4;
      });
    }

    previousItems = event => {
      event.preventDefault();
      const { images } = this.props;
      const { startIndex } = this.state;
      const { endIndex } = this.state;
      if (startIndex - 4 >= 0) {
        this.setState(() => {
          startIndex: startIndex - 4;
          endIndex: endIndex - 4;
        });
      }
    };

    render();
    {
      return (
        <div className="image-list">
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
        </div>
      );
    }
  };
}

export default ImageList;
