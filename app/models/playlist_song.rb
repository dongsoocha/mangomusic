class PlaylistSong < ApplicationRecord
    validates :playlist_id, :song_id, presence: true
    validates :playlist_id, uniqueness: { scope: :song_id }

    belongs_to :playlist,
        foreign_key: :playlist_id,
        class_name: :Playlist
    
    belongs_to :song,
        foreign_key: :song_id,
        class_name: :Song
end
