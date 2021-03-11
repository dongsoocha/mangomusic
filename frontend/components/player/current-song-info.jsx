import React from 'react';

class CurrentSongInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      duration: null,
    };

    this.seekTrack = this.seekTrack.bind(this);
  }

    componentDidMount() {
        this.interval = setInterval(() => this.refresh(), 100);
    }

    refresh() {
        this.setState({
        time: this.props.time,
        duration: this.props.duration || 500,
        });
    }

  seekTrack(e) {
      this.setState({time: e.target.value});
      this.props.audio.current.currentTime = e.target.value; // this works
  }

  render() {
    if (!this.props.currentSong) {
      return (
        <div className="current-info">
          <img src={window.defaultalbumURL} alt="song-album-cover" />
          <div className="info">
            <img
              className="default-logo"
              src={window.mangoURL}
              alt="mango logo"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="current-info">
        <img src={window.testalbumURL} alt="song-album-cover" />
        <div className="with-info">
          <p className="song-name">{this.props.currentSong.name}</p>
          <p className="song-artist">{this.props.currentSong.artist.name}</p>
          <input
            className="song-progress"
            type="range"
            min="0"
            max={this.state.duration}
            step="1"
            value={this.state.time || 0}
            onChange={(e) => this.seekTrack(e)}
          />
        </div>
      </div>
    );
  }
}

export default CurrentSongInfo;