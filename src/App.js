import React, {useState} from 'react';
//Import Styles
import "./styles/app.scss"
//Adding Components
import Player from "./components/player";
import Song from "./components/song";
//Import Util
import data from './util';


function App() {
    //State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    return (
        <div className="App">
            < Song currentSong={currentSong}/>
            < Player currentSong={currentSong}/>
        </div>
    );
}

export default App;
