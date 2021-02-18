json.extract! @album, :id, :album_name, :artist_id, :release_date
json.songs @songs
json.artist @album.artist