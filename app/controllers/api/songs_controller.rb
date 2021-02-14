class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        if params[:album_id]
            album = Album.find(params[:album_id])
            @songs = album.songs
        end
        render 'api/songs/index'
    end
end
