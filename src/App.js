import React, { Component } from 'react';
// import {textNodes} from './game'
import './index.css';

function AddLibrary(urlOfTheLibrary, typeOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.type = typeOfTheLibrary;
  document.body.appendChild(script);
}

class App extends React.Component {
  render() { 
    return (
      <React.Fragment>
        {/* <img src={textNodes[0].img} className="locationIMG" alt="Location"></img> */}
        <div className="container">
          <div className="health">
            <span id="amount">Money</span>
            <span id="hunger">Hunger</span>
            <span id="thirst">Thirst</span>
            <span id="stamina">Stamina</span>
            <span><u>(Underdevelopment)</u></span>
          </div>
          <div id="text">Text</div>
          <div id="option-buttons" className="btn-grid">
            <button className="btn">Option 1</button>
            <button className="btn">Option 2</button>
            <button className="btn">Option 3</button>
            <button className="btn">Option 4</button>
          </div>
        </div>
        {AddLibrary('./java-script/game.js','text/javascript')}
      </React.Fragment>
    )
  }
}
 
export default App;

