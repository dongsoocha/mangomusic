json.(@artists) do |artist|
    json.id artist.id
    json.name artist.album_name
    json.songs artist.songs
    json.albums artist.albums
end