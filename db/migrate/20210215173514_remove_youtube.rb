class RemoveYoutube < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :youtube_url
  end
end
