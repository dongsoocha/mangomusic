json.(@playlists) do |playlist|
    json.id playlist.id
    json.name playlist.name
    json.userId playlist.user_id
end
