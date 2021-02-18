json.extract! @album, :id, :album_name, :artist_id, :release_date
json.id @album.id
json.albumName @album.album_name
json.artistId @album.artistId
json.releaseDate @album.release_date
json.songs @songs
json.artist @album.artist