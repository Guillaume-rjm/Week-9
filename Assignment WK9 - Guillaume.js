//Assignment WK9 - Guillaume

class MediaPlaylist {

  constructor(Name, Duration) {
    this._Name = Name;
    this._Duration = Duration;
  }

  // add(Name, Duration) {
  //   let aPlaylist = [];
  //   aPlaylist.push(Name, Duration);
  //   return aPlaylist;
  // }

  mediaDisplay() {
    return `Name: ${this._Name}` + '\n' + `Duration: ${this._Duration} s`;
  }

  // next() {
  // }
  //
  // playlist() {
  // }
  //
  // sortplaylist() {
  // }

}

class Music extends MediaPlaylist {

  constructor(Name, Duration, Artist) {
    super(Name, Duration);
    this._Artist = Artist;
  }

  mediaDisplay() {
    return `Name: ${this._Name}` + '\n' + `Artist: ${this._Artist}` + '\n' + `Duration: ${this._Duration} s`;
  }
}

class Movie extends MediaPlaylist {

  constructor(Name, Duration, Rating) {
    super(Name, Duration);
    this._Rating = Rating;
  }

  mediaDisplay() {
    return `Name: ${this._Name}` + '\n' + `Duration: ${this._Duration} s` + '\n' + `Rating: ${this._Rating}`;
  }
}

class Podcast extends MediaPlaylist {

  constructor(Name, Duration) {
    super(Name, Duration);
  }
}

class PlaylistAll { //extends MediaPlayList {
  constructor() {
    this._aPlaylist = [];
    this.currentItem = 0;
  }

  add(anyMedia) {
    return this._aPlaylist.push(anyMedia);
  }

  playing() {
    return this._aPlaylist[this.currentItem].mediaDisplay();
  }

  next() {
    if (this.currentItem < this._aPlaylist.length - 1) {
      this.currentItem++;
    } else {
       this.currentItem = 0;
    }
  }

  sort(){
    return this._aPlaylist.sort();
  }
}

let Musiclist1 = new Music('Yellow Submarine', 158, 'The Beatles');
let Movielist1 = new Movie('Dumb & Dumber', 90, '96%');
let Podcastlist1 = new Podcast('Stuff to listen', 30);
//
// console.log(Musiclist1.mediaDisplay());
// console.log(Movielist1.mediaDisplay());
// console.log(Podcastlist1.mediaDisplay());

let playlist1 = new PlaylistAll();
playlist1.add(Musiclist1);
console.log(playlist1.playing());

playlist1.add(Movielist1);
playlist1.next();
console.log(playlist1.playing());

playlist1.add(Podcastlist1);
playlist1.next();
console.log(playlist1.playing());
