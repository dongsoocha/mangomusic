class Api::SongsController < ApplicationController
    def index
        album = Album.find(params[:album_id])
        @songs = album.songs
        render 'api/songs/index'
    end
end
