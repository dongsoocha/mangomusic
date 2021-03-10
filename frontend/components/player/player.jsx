import React from 'react';
import CurrentSongInfo from './current-song-info';

class Player extends React.Component {
    
    constructor (props) {
        super(props);
        this.audio = React.createRef();
        
        // const audio = useRef('audio-tag');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playState !== this.props.playState || prevProps.currentSong !== this.props.currentSong) {
            if (this.props.playState) {
                // debugger
                this.audio.current.play();
            } else {
                // debugger
                this.audio.current.pause();
        }}
    }

    toggle() {
        this.props.togglePlayState(this.props.currentSong.id);
    }

    MusicPlayer() {
        return (
            <div className="player-toolbar">
                <audio ref={this.audio} src={this.props.currentSong ? this.props.currentSong.audioUrl : ''} />
                <div className="player">
                    <button className="shuffle-button"><i className="fas fa-random"></i></button>
                    <button className="rewind-button"><i className="fas fa-backward"></i></button>
                    {this.props.playState }
                    <button  className="play-button" onClick={() => this.toggle()}>{this.props.playState ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}</button>
                    <button className="next-button"><i className="fas fa-forward"></i></button>
                    <button className="repeat-button"><i className="fas fa-redo"></i></button>
                </div>
                <CurrentSongInfo currentSong={this.props.currentSong}/>
                <div className="volume-slider">
                    <p className="volume-icon"><i className="fas fa-volume-up"></i></p>
                    <input type="range" min="1" max="100" defaultValue="50" step="1" className="slider" id="myRange"></input>
                </div>
                <button className="logout-button" onClick={() => this.props.logout()}>Log Out</button>
            </div>
        );
    };

    render() {
        return this.MusicPlayer();
    }
}


export default Player;
