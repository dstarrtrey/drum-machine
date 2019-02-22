import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Audio from "./audio/friggenheavymate.wav";
function Pad(props) {
  function handleClick() {
    console.log("keyBind: ", props.keyBind);
    document.getElementById(props.keyBind).play();
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
  changeState(event){
    console.log("Event: ", event);
    console.log("This: ", this);
    this.setState({pressed: event})
  }
  render() {
    return (
      <div id="drum-machine" className="drum-machine">
        <h1>Three Men and a Movie Soundboard</h1>
        <Display text={this.state.pressed} />
        <div className="pads">
          <Pad buttonClick={e => this.changeState(e)} keyBind="Q" audio={Audio} audioName="FriggenHeavyMate 1" />
          <Pad buttonClick={e => this.changeState(e)} keyBind="W" audio={Audio} audioName="FriggenHeavyMate 2" />
          <Pad buttonClick={e => this.changeState(e)} keyBind="E" audio={Audio} audioName="FriggenHeavyMate 3" />
          <Pad buttonClick={e => this.changeState(e)} keyBind="A" audio={Audio} audioName="FriggenHeavyMate 4" />
          <Pad buttonClick={e => this.changeState(e)} keyBind="S" audio={Audio} audioName="FriggenHeavyMate 5" />
          <Pad buttonClick={e => this.changeState(e)} keyBind="D" audio={Audio} audioName="FriggenHeavyMate 6" />
          <Pad buttonClick={e => this.changeState(e)} keyBind="Z" audio={Audio} audioName="FriggenHeavyMate 7" />
          <Pad buttonClick={e => this.changeState(e)} keyBind="X" audio={Audio} audioName="FriggenHeavyMate 8" />
          <Pad buttonClick={e => this.changeState(e)} keyBind="C" audio={Audio} audioName="FriggenHeavyMate 9" />
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
