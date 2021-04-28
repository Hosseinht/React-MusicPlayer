//This components control the music

import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";


const Player = ({
                    currentSong,
                    isPlaying,
                    setIsPlaying,
                    audioRef,
                    songInfo,
                    setSongInfo,
                    songs,
                    setCurrentSong,
                    setSongs
                }) => {
    //useEffect
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {...song, active: true,}
            } else {
                return {...song, active: false}
            }
        });
        setSongs(newSongs)
    }, [currentSong]);


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
    const skipTrackHandler = async (direction) => {
        //We need to know where awe are what is the current song and what are the next and previous
        // for this we need to know the index of the current song
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === "skip-back") {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play()
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
        if (isPlaying) audioRef.current.play()
    };
    //Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    return (
        <div className="player">
            {/*The input. It shows time and slider*/}
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}
                     className="track">
                    <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler}
                           type="range"/>
                    <div style={trackAnim} className="animate-track">

                    </div>
                </div>

                <p>{songInfo.duration ? getTime(songInfo.duration) : "0.00"}</p>
            </div>
            {/*Controls. Play pause next and previous*/}
            <div className="play-control">
                {/*the reason for arrow function is because we don't want to run it instantly*/}
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x"
                                 icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x"
                                 icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x"
                                 icon={faAngleRight}/>
            </div>

        </div>

    )
}

export default Player;

// || 0 fixes the warning error: Received NaN for the max attribute. it adds a default value