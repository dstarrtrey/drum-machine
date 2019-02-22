import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import NowNowNow from "./audio/nownownow.wav";
import SpeakingOfIMDB from "./audio/speakingofimdb.wav";
import DicksPicks from "./audio/dickspicks.wav";
import PremiumPickles from "./audio/premiumpickles.wav";
import For from "./audio/for.wav";
import YourTickles from "./audio/yourtickles.wav";
import BuyBuyBuy from "./audio/buybuybuy.wav";
import ItWasLong from "./audio/itwaslong.wav";
import Audio from "./audio/friggenheavymate.wav";
function Pad(props) {
  function handleClick() {
    console.log("keyBind: ", props.keyBind);
    const myAudio = document.getElementById(props.keyBind);
    myAudio.currentTime = 0;
    myAudio.volume = JSON.parse(props.vol);
    myAudio.play();
    console.log("Source: ", Audio);
    console.log("Pad props: ", props);
    props.buttonClick(props.audioName);
  }
  return (
    <button
      onClick={handleClick}
      id={props.audio}
      className={"drum-pad " + props.keyBind}
    >
      {props.keyBind}
      <audio id={props.keyBind} className="clip" src={props.audio}>
        <source src={props.audio} />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </button>
  );
}
function Display(props) {
  return <h2 id="display">{props.text}</h2>;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: "Made with React"
    };
  }
  changeState(event) {
    console.log("Event: ", event);
    console.log("This: ", this);
    this.setState({ pressed: event });
  }
  render() {
    return (
      <div id="drum-machine" className="drum-machine">
        <h1>Three Men and a Movie Soundboard</h1>
        <Display text={this.state.pressed} />
        <div className="pads">
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="1.0"
            keyBind="Q"
            audio={NowNowNow}
            audioName="NOW NOW NOW"
          />
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="1.0"
            keyBind="W"
            audio={SpeakingOfIMDB}
            audioName="Speaking of IMDB"
          />
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="0.8"
            keyBind="E"
            audio={DicksPicks}
            audioName="Dick's Picks"
          />
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="0.6"
            keyBind="A"
            audio={PremiumPickles}
            audioName="Premium Pickles"
          />
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="0.6"
            keyBind="S"
            audio={For}
            audioName="For"
          />
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="0.6"
            keyBind="D"
            audio={YourTickles}
            audioName="Your Tickles"
          />
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="1.0"
            keyBind="Z"
            audio={BuyBuyBuy}
            audioName="BUY THESE PICKLES PLEASE"
          />
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="0.8"
            keyBind="X"
            audio={ItWasLong}
            audioName="It Was Long"
          />
          <Pad
            buttonClick={e => this.changeState(e)}
            vol="0.2"
            keyBind="C"
            audio={Audio}
            audioName="FriggenHeavyMate MIDI"
          />
        </div>
        <footer>© David L. Starr 2019</footer>
      </div>
    );
  }
}
document.addEventListener("keyup", function(event) {
  if (document.getElementById(String.fromCharCode(event.keyCode))) {
    document
      .getElementsByClassName(String.fromCharCode(event.keyCode))[0]
      .click();
  }
});
ReactDOM.render(<App />, document.getElementById("root"));
