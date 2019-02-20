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




class ListAll extends Component {
  state = { data: [photoCaprellids, photoChinook, photoHerring, photoPompano, photoPryosomes, photoSeaNettle, photoSquid, photoTunicat, photoWolf_Eel] };
	
	allItems = () => {
    var filter = [photoCaprellids, photoChinook, photoHerring, photoPompano, photoPryosomes, photoSeaNettle, photoSquid, photoTunicat, photoWolf_Eel];
    this.setState({ data: filter });
  };

  expectedItems = () => {
    var filter = [photoCaprellids, photoChinook, photoHerring, photoSeaNettle, photoTunicat, photoWolf_Eel];
    this.setState({ data: filter });
  };

  unexpectedItems = () => {
    var filter = [photoPompano, photoPryosomes, photoSquid];
    this.setState({ data: filter });
  };

  render() {
    return (  
      <Flipper flipKey={this.state.data.fullScreen}>
        <button onClick={this.allItems}> All organisms</button>
        <button onClick={() => this.expectedItems()}>Expected organisms</button>
        <button onClick={() => this.unexpectedItems()}>Unexpected organisms</button>
        <ul className="list">
          {this.state.data.map(d => (
            <Flipped key={d} flipId={d}>
              <li>
                <img className= "image" src= {d} />
              </li>
            </Flipped>
          ))}
        </ul>
      </Flipper>
    );
  }
}

ReactDOM.render(<ListAll />, document.querySelector("#root"));