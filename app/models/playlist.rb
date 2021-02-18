class Playlist < ApplicationRecord
    validates :name, :user_id, presence: true
    validates :name, uniqueness: {scope: :user_id}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :playlist_songs,
        foreign_key: :playlist_id,
        class_name: :PlaylistSong

    has_many :songs,
        through: :playlist_songs,
        source: :song

end
