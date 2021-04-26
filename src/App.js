import React, {useRef, useState} from 'react';
//Import Styles
import "./styles/app.scss"
//Adding Components
import Player from "./components/player";
import Song from "./components/song";
import Library from "./components/library";
//Import Util
import data from './util';


function App() {
    //Ref
    const audioRef = useRef(null);
    //State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })
    const timeUpdatehandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    };
    return (
        <div className="App">
            < Song currentSong={currentSong}/>
            < Player songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying}
                     setIsPlaying={setIsPlaying} currentSong={currentSong}/>
            < Library isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}/>
            <audio onLoadedMetadata={timeUpdatehandler} onTimeUpdate={timeUpdatehandler}
                   ref={audioRef}
                   src={currentSong.audio}>
            </audio>
        </div>
    );
}

export default App;
