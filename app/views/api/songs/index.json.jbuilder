json.array! @songs do |song|
    json.extract! song, :id, :name, :album_id, :track_number
    json.audioUrl url_for(song.audio)
end