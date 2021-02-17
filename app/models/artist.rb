class Artist < ApplicationRecord
    validates :name, :description, presence: true

    has_many :albums,
        foreign_key: :artist_id,
        class_name: :Album

    has_many :songs,
        through: :albums,
        source: :songs
end
