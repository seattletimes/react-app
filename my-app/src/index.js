import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Flipper, Flipped } from "react-flip-toolkit";
import styles from "./styles.css";

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

const FullScreenFish = ({ toggleFullScreen, image, text, name, scienceName, info }) => (
  <div className="full-screen-square image">
    <h6>X | Close</h6>
    <img src={image} onClick={toggleFullScreen} />
    <h2>{name}</h2>
    <h3>{scienceName}</h3>
    <h4>{info}</h4>
    <h5>{text}</h5>

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
          <FullScreenFish toggleFullScreen={this.toggleFullScreen} image={this.props.image} text={this.props.text} name={this.props.name} scienceName={this.props.scienceName} info={this.props.info} />
        ) : (
          <Fish toggleFullScreen={this.toggleFullScreen} image={this.props.image} />
        )}
            </li>
        </Flipped>
    );
  }
}

var chinook = {
  image: photoChinook,
  name: "Juvenile chinook",
  scienceName: "Oncorhynchus tshawytscha",
  info: "native, typical mature fish 36 inches long",
  text: "This juvenile chinook was caught in a science survey off the Washington coast in June 2018. Ocean conditions have been poor for juvenile survival in recent years, bad news for endangered southern resident killer whales that depend primarily on chinook for food."
};

var caprellids = {
  image: photoCaprellids,
  name: "Caprellid amphipods on kelp",
  scienceName: "Caprellidae",
  info: "native, about the size of a corn kernel",
  text: "Tiny animals such as these crustaceans are part of the ocean food chain."
}

var pryosomes = {
  image: photoPryosomes,
  name: "Pyrosome",
  scienceName: "Pyrosoma atlanticum",
  info: "nonnative, average 5.1 inches long",
  text: "The presence of freakish numbers of subtropical pyrosomes was just one sign of massive changes in the ocean due to The Blob."
}

var seaNettle = {
  image: photoSeaNettle,
  name: "Sea nettle",
  scienceName: "Chrysaora fuscescens",
  info: "native to Pacific Northwest, average 6.2 inches long",
  text: "Even the jellyfish community changed because of The Blob. The sight of this native sea nettle was a relief to researchers in their survey off Washington’s coast."
}

var pompano = {
  image: photoPompano,
  name: "Pacific pompano",
  scienceName: "Peprilus simillimus",
  info: "nonnative, average 6.4 inches long",
  text: "This tropical fish still lingers in Washington waters, an after-effect of The Blob."
}

var wolf_Eel = {
  image: photoWolf_Eel,
  name: "Wolf eel",
  scienceName: "Anarrhichthys ocellatus",
  info: "native, average 20.7 inches long",
  text: "Washington’s outer coast teems with a dazzling variety of animals, such as this writhing wolf eel, snapping its tiny teeth."
}

var squid = {
  image: photoSquid,
  name: "Squid",
  scienceName: "Doryteuthis opalescens",
  info: "native, average 3.2 inches long",
  text: "These squid are normal in Washington waters but in 2018 were caught in huge numbers coast-wide for reasons not yet understood."
}

var tunicat = {
  image: photoTunicat,
  name: "Salp",
  scienceName: "Thetys vagina",
  info: "native, this lone specimen was palm-sized",
  text: "A shimmering salp is native to Washington waters. It moves by pumping water through its gelatinous body."
}

var herring = {
  image: photoHerring,
  name: "Pacific herring",
  scienceName: "Clupea pallasii",
  info: "native, can reach up to 18 inches long",
  text: "Herring and other forage fish are crucial food for salmon."
}

class ListAll extends Component {
  state = { data: [chinook, caprellids, pryosomes, seaNettle, pompano, wolf_Eel, squid, tunicat, herring] };
	
	allItems = () => {
    var filter = [chinook, caprellids, pryosomes, seaNettle, pompano, wolf_Eel, squid, tunicat, herring];
    this.setState({ data: filter });
  };

  expectedItems = () => {
    var filter = [chinook, caprellids, seaNettle, wolf_Eel, squid, tunicat, herring];
    this.setState({ data: filter });
  };

  unexpectedItems = () => {
    var filter = [pryosomes, pompano];
    this.setState({ data: filter });
  };

  render() {
    return (  
      <Flipper flipKey={this.state.data.image}>
      <div className="groupButton">
        <button onClick={this.allItems}> Sample of species</button>
        <button onClick={() => this.expectedItems()}>Expected species</button>
        <button onClick={() => this.unexpectedItems()}>Unexpected species</button>
      </div>
        <ul className="list">
          {this.state.data.map(d => (
            <AnimatedFish key={d} flipId={d} image={d.image} text={d.text} name={d.name} scienceName={d.scienceName} info={d.info} />
          ))}
        </ul>
      </Flipper>

    );
  }
}


ReactDOM.render(<ListAll />, document.querySelector("#root"));