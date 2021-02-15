class Api::SongsController < ApplicationController
    def index
        if params[:album_id] == "browse"
            @songs = Song.all
        else
            album = Album.find(params[:album_id])
            @songs = album.songs
        end
        render 'api/songs/index'
    end

    def show
        @song = Song.find(params[:id])
        render 'api/songs/show'
    end
end
