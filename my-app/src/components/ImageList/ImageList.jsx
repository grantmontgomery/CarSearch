import React, { Component } from "react";
import { Image } from ".././Image";
import "./ImageList.css";

class ImageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { images } = this.props;
    return (
      <div className="image-list">
        {images.map(({ image, alt_description, urls, id }) => (
          <Image
            url={urls.regular}
            alt={alt_description}
            key={id}
            id={id}
          ></Image>
        ))}
      </div>
    );
  }
}

export default ImageList;
