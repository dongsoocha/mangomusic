class Song < ApplicationRecord
    validates :name, :album_id, :track_number, presence: true
    validates :name, uniqueness: true
    validates :album_id, uniqueness: {scope: :name}
end
