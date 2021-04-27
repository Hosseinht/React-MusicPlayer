//This components control the music

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo}) => {
    //Ref. to get an element(audio)

    //Event Handlers
    const playSongHandler = () => {
        // console.log(audioRef.current)
        //Play and pause the song
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    };

    // format the time
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    //State

    return (
        <div className="player">
            {/*The input. It shows time and slider*/}
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler}
                       type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            {/*Controls. Play pause next and previous*/}
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x"
                                 icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>

        </div>

    )
}

export default Player;

// || 0 fixes the warning error: Received NaN for the max attribute. it adds a default value