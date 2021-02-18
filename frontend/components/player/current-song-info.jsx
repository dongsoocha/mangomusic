import React from 'react';

const CurrentSongInfo = ({ currentSong }) => {

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


    const songInfo = () => {
        // debugger
        return (
        <div className="current-info">
            <img src={window.testalbumURL} alt="song-album-cover"/>
            <div className="with-info">
                <p className="song-name">{currentSong.name}</p>
                <p className="song-artist">{currentSong.artist.name}</p>
            </div>
        </div>
        )
    }

    return (
        currentSong ?
        songInfo() :
        nosongInfo()
    )
}

export default CurrentSongInfo;