import React, { Component } from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import { SearchBar } from "./components";
import { ImageList } from "./components";

class App extends Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
