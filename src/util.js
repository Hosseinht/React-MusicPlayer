

export const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
        const playPromis = audioRef.current.play();
        // undefined: if the audio is undefined means it hasn't loaded up'
        if (playPromis !== undefined) {
            playPromis.then((audio) => {
                audioRef.current.play();

            });
        }
    }
};