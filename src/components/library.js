import React from 'react';
import LibrarySong from "./librarysong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong songs={songs} song={song} setCurrentSong={setCurrentSong} audioRef={audioRef}
                                 isPlaying={isPlaying} setSongs={setSongs} id={song.id}
                                 key={song.id}/>
                ))}
            </div>
        </div>
    )
};

export default Library;