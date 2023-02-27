function make_album(artist_name:string, album_title:string, num_tracks:number) {
  let album = {
    artist: artist_name,
    title: album_title,
  };

  if (num_tracks) {
    album.tracks = num_tracks;
  }

  return album;
}

let album1 = make_album("Daft Punk", "Random Access Memories");
let album2 = make_album("The Beatles", "Abbey Road");
let album3 = make_album("Pink Floyd", "The Wall", 26);

console.log(album1);
console.log(album2);
console.log(album3);