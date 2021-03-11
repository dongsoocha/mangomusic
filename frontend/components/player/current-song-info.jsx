import React from 'react';

const CurrentSongInfo = ({ currentSong, time, audio }) => {

    const nosongInfo = () => {
        return (
            <div className="current-info">
                <img  src={window.defaultalbumURL} alt="song-album-cover"/>
                <div className="info">
                    <img className="default-logo" src={window.mangoURL} alt="mango logo"/>
                </div>
            </div>
        )
    }
    const seekTrack = (e) => {
        audio.current.currentTime = e.target.value;
    }

    const songInfo = () => {
        // debugger
        let duration = audio.current.duration;
        return (
          <div className="current-info">
            <img src={window.testalbumURL} alt="song-album-cover" />
            <div className="with-info">
              <p className="song-name">{currentSong.name}</p>
              <p className="song-artist">{currentSong.artist.name}</p>
              <input
                type="range"
                min="0"
                max={duration}
                step="1"
                defaultValue={audio.current.currentTime}
                onChange={(e) => seekTrack(e)}
              />
            </div>
          </div>
        );
    }

    return (
        currentSong ?
        songInfo() :
        nosongInfo()
    )
}

export default CurrentSongInfo;