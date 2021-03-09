json.songs do 
    json.array!(@songs) do |song|
        json.extract! song, :name
    end
end

json.albums do 
    json.array!(@albums) do |album|
        json.extract! album, :album_name
    end
end

json.artists do
    json.array!(@artists) do |artist|
        json.extract! artist, :name
    end
end