class Api::SearchController < ApplicationController
    def index
        @songs = Song.where("name ILIKE ?", "%" + params[:search] + "%")
        @albums = Album.where("album_name ILIKE ?", "%" + params[:search] + "%")
        @artists = Playlist.where("name ILIKE ?", "%" + params[:search] + "%")
    end
end
