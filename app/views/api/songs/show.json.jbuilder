json.extract! song, :id, :name, :album_id, :track_number
json.audioUrl url_for(song.audio)