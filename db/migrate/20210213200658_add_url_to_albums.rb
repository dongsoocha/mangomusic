class AddUrlToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :image_url, :string, null: false
  end
end
