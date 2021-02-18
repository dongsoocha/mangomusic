json.(@playlists) do |playlist|
    json.name playlist.name
    json.userId playlist.userId
end
