//Show the song name artist and the picture
import React from "react";

const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, id, setSongs}) => {
    const songSelecthandler = async () => {
        await setCurrentSong(song);
        //Ad Active State
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {...song, active: true,}
            } else {
                return {...song, active: false}
            }
        });
        setSongs(newSongs)
        //Check if the song is playing
        if (isPlaying) audioRef.current.play()
    };
    return (
        <div onClick={songSelecthandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;