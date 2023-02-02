"use strict";
class Song {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    play() {
        console.log('Playing ' + this.title + "by " + this.artist);
    }
}
