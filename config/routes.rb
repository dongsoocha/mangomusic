Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' 

  namespace :api, defaults: {format: :json} do
    # Signup/register
    resources :users, only: [:create] 
    # login/logout
    resource :session, only: [:create, :destroy] 
    resources :albums, only: [:show, :index] do 
      resources :songs, only: [:index]
    end
    resources :artists, only: [:index, :show]
    resources :songs, only: [:show]
    resources :playlists, only: [:create, :index, :show, :update]
    resources :playlist_songs, only: [:create, :destroy]
    resources :search, only: [:index]
  end
end
