class Api::PlaylistsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        user = current_user
        @playlists = user.playlists
        render 'api/playlists/index'
    end

    def show
        render 'api/playlists/show'
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render 'api/playlists/show'
        end
    end

    private

    def playlist_params
        params.require(:playlist).permit(:name, :user_id)
    end
end
