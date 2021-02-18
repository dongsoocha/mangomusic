class Api::PlaylistSongsController < ApplicationController
    skip_before_action :verify_authenticity_token

    
    def create
        playlist_song = PlaylistSong.new(playlist_params)
        playlist_song.save
    end
    

    def delete
        
    end

    private

    def playlist_params
        params.require(:playlist_song).permit(:song_id, :playlist_id)
    end
end
