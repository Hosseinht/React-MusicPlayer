import React, {useRef, useState} from 'react';
//Import Styles
import "./styles/app.scss"
//Adding Components
import Player from "./components/player";
import Song from "./components/song";
import Library from "./components/library";
import Nav from "./components/nav";
//Import Util
import data from './data';

//Data or whatever we like to name it


function App() {
    //Ref
    const audioRef = useRef(null);
    //State
    // It returns data from util
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false)
    //Connected to songInfo to handle the time of the song
    const timeUpdatehandler = (e) => {

        const current = e.target.currentTime;
        const duration = e.target.duration;
        //Calculate percentage
        const roundedCurrent = Math.round(current)
        const roundedDuration = Math.round(duration)
        const animation = Math.round((roundedCurrent / roundedDuration) * 100)
        setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage: animation})
    };
    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        if (isPlaying) audioRef.current.play();

    }
    return (
        <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
            < Song currentSong={currentSong}/>
            < Player songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying}
                     setIsPlaying={setIsPlaying} currentSong={currentSong} songs={songs}
                     setSongs={setSongs} setCurrentSong={setCurrentSong}/>
            < Library libraryStatus={libraryStatus} isPlaying={isPlaying} audioRef={audioRef} songs={songs}
                      setSongs={setSongs}
                      setCurrentSong={setCurrentSong}/>
            <audio onLoadedMetadata={timeUpdatehandler} onTimeUpdate={timeUpdatehandler}
                   ref={audioRef}
                   src={currentSong.audio}
                   onEnded={songEndHandler}>
            </audio>
        </div>
    );
}

export default App;

//audioRef. This is how we use an html tag in playSongHandler. Select a specific html tag inside of a components

//songInfo, setSongInfo. Set the song time on the slider
//onLoadedMetadata.  This event update the time without playing the song