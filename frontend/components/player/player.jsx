import React, { useRef } from 'react';

const Player = ({logout, currentSong, playState, togglePlayState}) => {
    const audio = useRef('audio-tag');
    const toggle = () => {
        togglePlayState(currentSong.id);
        // debugger
        playState ? audio.current.play() : audio.current.pause();
    }
    const autoplay = () => {
        debugger
        if (playState) {
            audio.current.play();
        }
    }
    const StaticPlayer = () => (
        <div className="player-toolbar">
            <div className="player">
                <button className="shuffle-button"><i className="fas fa-random"></i></button>
                <button className="rewind-button"><i className="fas fa-backward"></i></button>
                <button className="play-button"><i className="fas fa-play"></i></button>
                <button className="next-button"><i className="fas fa-forward"></i></button>
                <button className="repeat-button"><i className="fas fa-redo"></i></button>
            </div>
            <div className="current-info">
                <img className="default-album-cover" src={window.defaultalbumURL} alt="Mango Logo" />
                <div className="info">
                    <img className="default-info-logo" src={window.mangoURL} alt="default logo" />
                </div>
            </div>
            <div className="volume-slider">
                <p className="volume-icon"><i className="fas fa-volume-up"></i></p>
                <input type="range" min="1" max="100" defaultValue="50" step="1" className="slider" id="myRange"></input>
            </div>
            <button className="logout-button" onClick={() => logout()}>Log Out</button>
        </div>
    );

    const MusicPlayer = () => {
        return (
            <div className="player-toolbar">
                <audio ref={audio}>
                    <source src={currentSong.audioUrl} type="audio/mpeg"/>
                </audio>
                {autoplay()}
                <div className="controls">
                    <button className="shuffle-button"><i className="fas fa-random"></i></button>
                    <button className="rewind-button"><i className="fas fa-backward"></i></button>
                    <button className="play-button" onClick={() => toggle()}><i className="fas fa-play"></i></button>
                    <button className="next-button"><i className="fas fa-forward"></i></button>
                    <button className="repeat-button"><i className="fas fa-redo"></i></button>
                </div>
                <div className="current-info">

                </div>
                <div className="volume-slider">
                    <p className="volume-icon"><i className="fas fa-volume-up"></i></p>
                    <input type="range" min="1" max="100" defaultValue="50" step="1" className="slider" id="myRange"></input>
                </div>
                <button className="logout-button" onClick={() => logout()}>Log Out</button>
            </div>
        );
    };

    return (currentSong ? 
    MusicPlayer() :
    StaticPlayer());
}

export default Player;
