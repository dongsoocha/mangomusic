class Album < ApplicationRecord
    validates :album_name, :artist_id, :release_date, presence: true
    validates :album_name, uniqueness: {scope: :artist_id}

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :songs,
        foreign_key: :album_id,
        class_name: :Song

end
