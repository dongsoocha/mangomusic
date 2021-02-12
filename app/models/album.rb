class Album < ApplicationRecord
    validates :album_name, :artist_id, :release_date, presence: true
    validates :album_name, uniqueness: {scope: :artist_id}
end
