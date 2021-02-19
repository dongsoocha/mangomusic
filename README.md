

# mangomusic

November 16, 2020  App Academy SF Cohort

A clone of Apple Music, Mango Music was created to allow the listener to create playlists, browse albums, view artists, and play songs. It is styled based on dark mode, and provides a soothing place to go for after-work relaxation.

*Copyright disclaimer: I hold the rights to use all audio as they are recordings of myself and my groups. 

## See it in action!
[Mango Music Live](https://mango-music.herokuapp.com/#/)

Table of Contents
* [Features](https://github.com/Chubbibanana/mangomusic/#features)
* [Splash](https://github.com/Chubbibanana/mangomusic/#splash)
* [Song Displays](https://github.com/Chubbibanana/mangomusic/#song-displays)
* [Artists](https://github.com/Chubbibanana/mangomusic/#artists)
* [Build](https://github.com/Chubbibanana/mangomusic/#built-with)
## Features
* Quick and easy User Authentication
* Music Playback/ Pause
* Playlist creation/ editing
* Browse album or artist pages
* Sidebar for quick navigation


### Splash
![Splash](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/splash.png)
* Fixed banner for signing up
* Login button for the already initiated
* An 'upsell' splash page

### Song Displays
All same-component lists are styled using CSS grid layout. 
* Ability to play/pause directly from the song item
* In albums, ability to add to any of the user-owned playlists
* Display window maintains info even if navigating to different page

![SongIndex](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/indexsong.png)
![SongAlbum](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/albumsong.png)
- Song Information Window


![SongInformation](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/albumsong.png)

### Artists
![Artistpage](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/songinformation.png)
* Artist page displays the artist profile and their albums
* Navigate to albums in 1 click
## Built with
Mango Music uses a Rails background and a React frontend to quickly display relevant information without having to rerender 
the entire page, allowing for a smooth user experience and navigation between pages.


## To-do
* Navigation controls and volume slider besides play/pause
* Searching database
* More playing functionality, such as add to queue/ remove from queue
* Playlist deletion
* User Library
* Add mobile scaling
