json.(@albums) do |album|
    json.id album.id
    json.artistId album.artist_id
    json.releaseDate album.release_date
end