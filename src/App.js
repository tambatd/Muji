import logo from './logo_muji_b.png';
import './App.css';
import bgm from "./muji_bgm.mp3"
import Books from "./book.js"

function App() {
  function play_sound() {
    console.log('You clicked play.');
    let audio = new Audio(bgm);
    audio.play();
  }

  return (
 
   <div className="App">
       <div className="red">
         <img src={logo}></img>
       </div>
    
     <div className="bg">
      <button onClick={play_sound}>play</button>
      <Books></Books>
     </div>
    </div>
  );
}

export default App;
