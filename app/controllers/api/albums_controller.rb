class Api::AlbumsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def show
        @album = Album.find(params[:id])
        render 'api/albums/show';
    end
end
