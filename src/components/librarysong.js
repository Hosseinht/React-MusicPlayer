//Show the song name artist and the picture
import React from "react";

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying}) => {
    const songSelecthandler = () => {
        setCurrentSong(song);

        //Check if the song is playing
        if (isPlaying) {
            const playPromis = audioRef.current.play();
            if (playPromis !== undefined) {
                playPromis.then((audio) => {
                    audioRef.current.play();
                    console.log()
                })
            }
        }

    }
    return (
        <div onClick={songSelecthandler} className="library-song">
            <img alt={song.name} src={song.cover}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;