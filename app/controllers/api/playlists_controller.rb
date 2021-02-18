class Api::PlaylistsController < ApplicationController
    def index
        user = current_user
        @playlists = user.playlists
        render 'api/playlists'
    end

    def show
        render 'api/playlists/show'
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render :show
        end
    end

    private

    def playlist_params
        params.require(:playlist).permit(:name, :user_id)
    end
end
