json.album do
    json.id @album.id
    json.name @album.album_name
    json.artist_id @album.artist_id
    json.release_date @album.release_date
    json.songs @songs
    json.artist @album.artist
end