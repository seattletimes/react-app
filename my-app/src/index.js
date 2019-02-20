import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Flipper, Flipped } from "react-flip-toolkit";
import styles from "./styles.css";
// import styles from "./css/seed.less";

import photoCaprellids from "./photos/Caprellids.jpg";
import photoChinook from "./photos/Chinook.jpg";
import photoHerring from "./photos/Herring.jpg";
import photoPompano from "./photos/Pompano.jpg";
import photoPryosomes from "./photos/Pryosomes.jpg";
import photoSeaNettle from "./photos/SeaNettle.jpg";
import photoSquid from "./photos/Squid.jpg";
import photoTunicat from "./photos/Tunicat.jpg";
import photoWolf_Eel from "./photos/Wolf_Eel.jpg";

const Fish = ({ toggleFullScreen, image }) => (
  <div>
    <img className="square image" src={image} onClick={toggleFullScreen} />
  </div>
);

const FullScreenFish = ({ toggleFullScreen, image, text }) => (
  <div className="full-screen-square image">
    <img src={image} onClick={toggleFullScreen} />
    <h2>{text}</h2>
  </div>
);

class AnimatedFish extends Component {
  state = { fullScreen: false };

  toggleFullScreen = () => {
    this.setState(prevState => ({
      fullScreen: !prevState.fullScreen
    }));
  };

  render() {
    return (
        <Flipped key={this.props.d} flipId={this.props.flipId}>
            <li>
                {this.state.fullScreen ? (
          <FullScreenFish toggleFullScreen={this.toggleFullScreen} image={this.props.image} text={this.props.text} />
        ) : (
          <Fish toggleFullScreen={this.toggleFullScreen} image={this.props.image} text={this.props.text} />
        )}
            </li>
        </Flipped>
    );
  }
}

var chinook = {
  image: photoChinook,
  text: "I am a Chinook RAWRRRRR"
};

class ListAll extends Component {
  // state = { data: [photoChinook, photoCaprellids, photoPryosomes, photoSeaNettle, photoPompano, photoWolf_Eel, photoSquid, photoTunicat, photoHerring] };
  state = { data: [chinook] };
	
	allItems = () => {
    // var filter = [photoChinook, photoCaprellids, photoPryosomes, photoSeaNettle, photoPompano, photoWolf_Eel, photoSquid, photoTunicat, photoHerring];
    var filter = [chinook];
    this.setState({ data: filter });
  };

  expectedItems = () => {
    // var filter = [photoChinook, photoCaprellids, photoSeaNettle, photoWolf_Eel, photoTunicat, photoHerring];
    var filter = [chinook];
    this.setState({ data: filter });
  };

  unexpectedItems = () => {
    // var filter = [photoPryosomes, photoPompano, photoSquid];
    var filter = [chinook];
    this.setState({ data: filter });
  };

  render() {
    return (  
      <Flipper flipKey={this.state.data}>
      <div className="groupButton">
        <button onClick={this.allItems}> All organisms</button>
        <button onClick={() => this.expectedItems()}>Expected organisms</button>
        <button onClick={() => this.unexpectedItems()}>Unexpected organisms</button>
      </div>
        <ul className="list">
          {this.state.data.map(d => (
            <AnimatedFish key={d} flipId={d} image={d.image} text={d.text}/>
          ))}
        </ul>
      </Flipper>

    );
  }
}


ReactDOM.render(<ListAll />, document.querySelector("#root"));