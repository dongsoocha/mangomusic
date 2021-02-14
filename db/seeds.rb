# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email: "mango@mango.com", password: "ilovemusic")
Artist.create(name: "Dongsoo Cha", description: "Dongsoo Cha currently resides in Vienna, Austria, studying under the supervision of Barbara Górzyńska. He received his Master of Music at Yale University, studying under the tutelage of Syoko Aki, and his Bachelor of Music in Violin Performance from the University of Southern California, studying under Glenn Dicterow. He has won numerous competitions including the Austin Symphony Concerto Competition, the Pearl Amster Concerto Competition, and First Prize in the Texas Association of Symphony Orchestras Juanita Miller Concerto Competition’s String Divison. He has performed with the Austin Symphony Orchestra and the Austin Civic Orchestra, and has performed on the radio. He has attended the Green Mountain Chamber Music Festival, Luzerne Music Center’s summer festival, and the PyeongChang Music Festival and School. Among his previous teachers are Daniel Ching, Brian Lewis, and Zhao Wei.", image_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/images/blank_album_cover.png")
Album.create(album_name: "Recital Hits", artist_id: 1, release_date: "April 17, 2019")
Album.create(album_name: "Chamber Hits", artist_id: 1, release_date: "April 17, 2019")
Song.create(name: "Sonata for Solo Violin Sz. 117, BB 124, I", album_id:1, track_number: 1, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/bartok_1_mov.mp3")
Song.create(name: "Sonata for Solo Violin Sz. 117, BB 124, II", album_id:1, track_number: 2, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/bartok_2_mov.mp3")
Song.create(name: "Sonata for Solo Violin Sz. 117, BB 124, III", album_id:1, track_number: 3, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/bartok_3_move.mp3")
Song.create(name: "Sonata for Solo Violin Sz. 117, BB 124, IV", album_id:1, track_number: 4, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/bartok_4_mov.mp3")
Song.create(name: "Violin Sonata No. 3 in D minor, Op. 108, I", album_id:1, track_number: 5, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/brahms_seed_1_mov.mp3")
Song.create(name: "Violin Sonata No. 3 in D minor, Op. 108, II", album_id:1, track_number: 6, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/brahms_seed_2_mov.mp3")
Song.create(name: "Violin Sonata No. 3 in D minor, Op. 108, III", album_id:1, track_number: 7, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/brahms_seed_3_mov.mp3")
Song.create(name: "Violin Sonata No. 3 in D minor, Op. 108, IV", album_id:1, track_number: 8, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/brahms_seed_4_mov.mp3")
Song.create(name: "Carmen Fantasie", album_id:1, track_number: 9, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/hubay_seed_audio.mp3")
Song.create(name: "Faust Fantasie", album_id:1, track_number: 10, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/wieniawski_seed.mp3")
Song.create(name: "Ravel Piano Trio, I", album_id:2, track_number: 11, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/ravel_mov_1.mp3")
Song.create(name: "Ravel Piano Trio, II", album_id:2, track_number: 12, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/ravel_2_mov.mp3")
Song.create(name: "Ravel Piano Trio, III", album_id:2, track_number: 13, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/ravel_mov_3.mp3")
Song.create(name: "Ravel Piano Trio, IV", album_id:2, track_number: 14, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/ravel_mov_4.mp3")
Song.create(name: "Piano Trio in G minor, Op 15, I", album_id:2, track_number: 10, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/smetana_1_mov.mp3")
Song.create(name: "Piano Trio in G minor, Op 15, II", album_id:2, track_number: 10, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/smetana_2_mov.mp3")
Song.create(name: "Piano Trio in G minor, Op 15, III", album_id:2, track_number: 10, youtube_url: "/Users/dongsoo/Desktop/mango_music/mangomusic/app/assets/audios/smetana_3_mov.mp3")
