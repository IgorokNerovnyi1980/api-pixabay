import React, { Component } from "react";
import "./App.css";
import * as url from "./services/url";
import PageImg from "./Components/ForImages";
import PageVideo from "./Components/ForVideo";

class App extends Component {
  state = {
    images: null,
    videos: null
  };

  componentDidMount() {
    fetch(`${url.img}1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          images: [data.hits[0].largeImageURL]
        });
      })
      .catch(err => console.log(err));

    fetch(`${url.video}3`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          videos: [data.hits[0].videos.small]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { images, videos } = this.state;
    if (videos) {
      console.log(videos);
    }
    if (images) {
      console.log(images);
    }
    return (
      <>
        <header className="Header">
          <h1>Component App</h1>
        </header>
        <div className="App">
          {images !== null ? <PageImg arr={images} /> : <p>loading...</p>}
          {videos !== null ? <PageVideo arr={videos} /> : <p>loading...</p>}
        </div>
      </>
    );
  }
}

export default App;
