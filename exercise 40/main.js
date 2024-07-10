"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        album: album_title,
    };
    if (tracks !== undefined)
        album.tracks = tracks;
    return album;
}
// calling three function with different
let album1 = make_album("hamza", "album title 1");
let album2 = make_album("usman", "album title 2");
let album3 = make_album("ali", "album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
