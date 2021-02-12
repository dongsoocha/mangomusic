class Api::ArtistsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def show
        @artist = Artist.find(params[:id])
        render 'api/artists/show';
    end
end
