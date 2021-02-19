class Api::PlaylistSongsController < ApplicationController
    skip_before_action :verify_authenticity_token

    
    def create
        playlist_song = PlaylistSong.new(playlist_params)
        playlist_song.save
    end
    

    def destroy
        @playlist_song = Playlist_song.find_by(song_id: params[:song_id], playlist_id: params[:playlist_id])
        @playlist_song.destroy!
        @playlist = Playlist.find(params[:playlist_id])
        render 'api/playlists/show'
    end

    private

    def playlist_params
        params.require(:playlist_song).permit(:song_id, :playlist_id)
    end
end
