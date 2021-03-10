# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


User.create(email: "mango@mango.com", password: "ilovemusic")
Artist.create(name: "Dongsoo Cha", description: "Dongsoo Cha currently resides in Vienna, Austria, studying under the supervision of Barbara Górzyńska. He received his Master of Music at Yale University, studying under the tutelage of Syoko Aki, and his Bachelor of Music in Violin Performance from the University of Southern California, studying under Glenn Dicterow. He has won numerous competitions including the Austin Symphony Concerto Competition, the Pearl Amster Concerto Competition, and First Prize in the Texas Association of Symphony Orchestras Juanita Miller Concerto Competition’s String Divison. He has performed with the Austin Symphony Orchestra and the Austin Civic Orchestra, and has performed on the radio. He has attended the Green Mountain Chamber Music Festival, Luzerne Music Center’s summer festival, and the PyeongChang Music Festival and School. Among his previous teachers are Daniel Ching, Brian Lewis, and Zhao Wei.", image_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/images/blank_album_cover.png")
album1 = Album.create(album_name: "Recital Hits", artist_id: 1, release_date: "April 17, 2019")
album2 = Album.create(album_name: "Chamber Hits", artist_id: 1, release_date: "April 17, 2019")

song1 = Song.create(name: "Sonata for Solo Violin Sz. 117, BB 124, I", album_id: 1, track_number: 1) 
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/bartok_1_mov.mp3')
song1.audio.attach(io: file, filename: 'bartok_1_mov.mp3')

song2 = Song.create(name: "Sonata for Solo Violin Sz. 117, BB 124, II", album_id: 1, track_number: 2)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/bartok_2_mov.mp3')
song2.audio.attach(io: file, filename: 'bartok_2_mov.mp3')

song3 = Song.create(name: "Sonata for Solo Violin Sz. 117, BB 124, III", album_id: 1, track_number: 3)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/bartok_3_move.mp3')
song3.audio.attach(io: file, filename: 'bartok_3_move.mp3')

song4 = Song.create(name: "Sonata for Solo Violin Sz. 117, BB 124, IV", album_id: 1, track_number: 4)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/bartok_4_mov.mp3')
song4.audio.attach(io: file, filename: 'bartok_4_mov.mp3')

song5 = Song.create(name: "Violin Sonata No. 3 in D minor, Op. 108, I", album_id: 1, track_number: 5)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/brahms_seed_1_mov.mp3')
song5.audio.attach(io: file, filename: 'brahms_seed_1_mov.mp3')

song6 = Song.create(name: "Violin Sonata No. 3 in D minor, Op. 108, II", album_id: 1, track_number: 6)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/brahms_seed_2_mov.mp3')
song6.audio.attach(io: file, filename: 'brahms_seed_2_mov.mp3')

song7 = Song.create(name: "Violin Sonata No. 3 in D minor, Op. 108, III", album_id: 1, track_number: 7)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/brahms_seed_3_mov.mp3')
song7.audio.attach(io: file, filename: 'brahms_seed_3_mov.mp3')

song8 = Song.create(name: "Violin Sonata No. 3 in D minor, Op. 108, IV", album_id: 1, track_number: 8)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/brahms_seed_4_mov.mp3')
song8.audio.attach(io: file, filename: 'brahms_seed_4_mov.mp3')

song9 = Song.create(name: "Carmen Fantasie", album_id: 1, track_number: 9)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/hubay_seed_audio.mp3')
song9.audio.attach(io: file, filename: 'hubay_seed_audio.mp3')

song10 = Song.create(name: "Faust Fantasie", album_id: 1, track_number: 10)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/wieniawski_seed.mp3')
song10.audio.attach(io: file, filename: 'wieniawski_seed.mp3')

song11 = Song.create(name: "Ravel Piano Trio, I", album_id: 2, track_number: 1)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/ravel_mov_1.mp3')
song11.audio.attach(io: file, filename: 'ravel_mov_1.mp3')

song12 = Song.create(name: "Ravel Piano Trio, II", album_id: 2, track_number: 2)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/ravel_2_mov.mp3')
song12.audio.attach(io: file, filename: 'ravel_2_mov.mp3')

song13 = Song.create(name: "Ravel Piano Trio, III", album_id: 2, track_number: 3)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/ravel_mov_3.mp3')
song13.audio.attach(io: file, filename: 'ravel_mov_3.mp3')

song14 = Song.create(name: "Ravel Piano Trio, IV", album_id: 2, track_number: 4)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/ravel_mov_4.mp3')
song14.audio.attach(io: file, filename: 'ravel_mov_4.mp3')

song15 = Song.create(name: "Piano Trio in G minor, Op 15, I", album_id: 2, track_number: 5)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/smetana_1_mov.mp3')
song15.audio.attach(io: file, filename: 'smetana_1_mov.mp3')

song16 = Song.create(name: "Piano Trio in G minor, Op 15, II", album_id: 2, track_number: 6)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/smetana_2_mov.mp3')
song16.audio.attach(io: file, filename: 'smetana_2_mov.mp3')

song17 = Song.create(name: "Piano Trio in G minor, Op 15, III", album_id: 2, track_number: 7)
file = open('https://mango-music-seeds.s3-us-west-1.amazonaws.com/mango+audio+seeds/smetana_3_mov.mp3')
song17.audio.attach(io: file, filename: 'smetana_3_mov.mp3')
