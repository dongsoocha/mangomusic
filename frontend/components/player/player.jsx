import React from 'react';
import CurrentSongInfo from './current-song-info';

class Player extends React.Component {
    
    constructor (props) {
        super(props);
        this.audio = React.createRef();
        
        // const audio = useRef('audio-tag');
        this.changeVolume = this.changeVolume.bind(this);
        this.resetAudio = this.resetAudio.bind(this);
        // this.seekTrack = this.seekTrack.bind(this);
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

    changeVolume(e) {
        this.audio.current.volume = e.target.value;
    }

    resetAudio(e) {
        this.audio.current.currentTime = 0;
    }
    
    MusicPlayer() {
        return (
          <div className="player-toolbar">
            <audio
              ref={this.audio}
              src={
                  this.props.currentSong ? this.props.currentSong.audioUrl : ""
                }
              volume="0.5"
            />
            <div className="player">
              <button className="shuffle-button">
                <i className="fas fa-random"></i>
              </button>
              <button
                className="rewind-button"
                onClick={() => this.resetAudio()}
              >
                <i className="fas fa-backward"></i>
              </button>
              {/* {this.props.playState } */}
              <button className="play-button" onClick={() => this.toggle()}>
                {this.props.playState ? (
                  <i className="fas fa-pause"></i>
                ) : (
                  <i className="fas fa-play"></i>
                )}
              </button>
              <button className="next-button">
                <i className="fas fa-forward"></i>
              </button>
              <button className="repeat-button">
                <i className="fas fa-redo"></i>
              </button>
            </div>
            {this.audio.current ?
            <div className="song-seeker">
              <CurrentSongInfo currentSong={this.props.currentSong} audio={this.audio} time={this.audio.current.currentTime}/>
            </div>
            :
            null
            }
            <div className="volume-slider">
              <p className="volume-icon">
                <i className="fas fa-volume-up"></i>
              </p>
              <input
                type="range"
                min="0"
                max="1"
                defaultValue={this.audio.current ? this.audio.current.volume : .5}
                step=".01"
                className="slider"
                id="myRange"
                onChange={(e) => this.changeVolume(e)}
              ></input>
            </div>
            <button
              className="logout-button"
              onClick={() => this.props.logout()}
            >
              Log Out
            </button>
          </div>
        );
    };

    render() {
        return this.MusicPlayer();
    }
}


export default Player;
