class Artist < ApplicationRecord
    validates :name, :description, presence: true
end
