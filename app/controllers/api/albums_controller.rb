class Api::AlbumsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @albums = Album.all
        render 'api/albums/index'
    end

    def show
        @album = Album.find(params[:id])
        @songs = Song.find_by(album_id: @album.id)
        render 'api/albums/show';
    end
end
