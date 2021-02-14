class Api::SongsController < ApplicationController
    def index
        if params[:album_id]
            @songs = Song.find_by(album_id: params[:album_id])
        else
            @songs = Song.all
        end
        render :index
    end
end
