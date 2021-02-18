class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :playlists, [:name, :user_id]
  end
end
