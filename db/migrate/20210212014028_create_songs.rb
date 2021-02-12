class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.integer :album_id, null: false
      t.integer :track_number, null: false
      t.timestamps 
    end
    add_index :songs, :album_id
    add_index :songs, :name, unique: true
    add_index :songs, [:album_id, :name], unique: true
  end
end
