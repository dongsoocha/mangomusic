json.(@albums) do |album|
    json.id album.id
    json.name album.album_name
    json.artistId album.artist_id
    json.releaseDate album.release_date
    json.songs album.songs
end