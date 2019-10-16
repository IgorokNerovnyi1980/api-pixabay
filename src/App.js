import React, { Component } from "react";
import "./App.css";
import * as url from "./services/url";
import PageImg from "./Components/ForImages";
import PageVideo from "./Components/ForVideo";

class App extends Component {
  state = {
    images: null,
    videos: null,
    arrId: []
  };

  componentDidMount() {
    fetch(`${url.img}${url.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          images: [data.hits[0].largeImageURL]
        });
      })
      .catch(err => console.log(err));

    fetch(`${url.video}${url.id}`)
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
