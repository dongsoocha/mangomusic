json.songs do 
    json.array!(@songs) do |song|
        json.extract! song, :album_id, :name
    end
end

json.albums do 
    json.array!(@albums) do |album|
        json.extract! album, :id, :album_name, :release_date, :artist
    end
end

json.artists do
    json.array!(@artists) do |artist|
        json.extract! artist, :id,:name
    end
end