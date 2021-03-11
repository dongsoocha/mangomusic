import React from 'react';

// const CurrentSongInfo = ({ currentSong, time, audio }) => {

//     const nosongInfo = () => {
//         return (
//             <div className="current-info">
//                 <img  src={window.defaultalbumURL} alt="song-album-cover"/>
//                 <div className="info">
//                     <img className="default-logo" src={window.mangoURL} alt="mango logo"/>
//                 </div>
//             </div>
//         )
//     }
    

//     const songInfo = () => {
//         // debugger
//         return (
//           <div className="current-info">
//             <img src={window.testalbumURL} alt="song-album-cover" />
//             <div className="with-info">
//               <p className="song-name">{currentSong.name}</p>
//               <p className="song-artist">{currentSong.artist.name}</p>
//               <input
//                 type="range"
//                 min="0"
//                 max={audio.current.duration}
//                 step="1"
//                 defaultValue={audio.current.currentTime}
//                 onChange={(e) => seekTrack(e)}
//               />
//             </div>
//           </div>
//         );
//     }

//     return (
//         currentSong ?
//         songInfo() :
//         nosongInfo()
//     )
// }

class CurrentSongInfo extends React.Component {
    constructor(props) {
        super(props);
        this.seekTrack = this.seekTrack.bind(this);
    }

    seekTrack(e) {
        this.props.audio.current.currentTime = e.target.value;
    }

    componentDidUpdate(prevProps) {
        if (this.props.audio.current.currentTime !== prevProps.audio.current.currentTime) {
            debugger
        }
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
                type="range"
                min="0"
                max={this.props.audio.current.duration}
                step="1"
                defaultValue={this.props.audio.current.currentTime}
                onChange={(e) => this.seekTrack(e)}
              />
            </div>
          </div>
        );
    }
}

export default CurrentSongInfo;