class Api::ArtistsController < ApplicationController
    # skip_before_action :verify_authenticity_token
    def index
        @artists = Artist.all
        render 'api/artists/index';
    end
    
    def show
        @artist = Artist.find(params[:id])
        render 'api/artists/show';
    end
end
