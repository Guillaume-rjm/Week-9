//Codes Etudes WK9

class Character {

  constructor(Name, Age, Favorite_Song) {
    this._Name = Name;
    this._Age = Age;
    this._Favorite_Song = Favorite_Song;
         }

  sayMyName() {
    return `My name is ${this._Name}`
      }

  compareAges(Age2) {

    if(this._Age < Age2._Age) {
      return `${Age2._Name} is older than ${this._Name}`;

    } else {
      return `${this._Name} is older than ${Age2._Name}`;
      }
    }
  }

class Wizards extends Character {

  constructor(Name, Age, Favorite_Song, hatColor) {
    super(Name, Age, Favorite_Song);
    this._hatColor = hatColor;
  }

  castSpell(){
    return `${this._Name} is casting a spell!`
  }
}

class Bards extends Character {

  constructor(Name, Age, Favorite_Song, musicInstrument) {
    super(Name, Age, Favorite_Song);
    this._musicInstrument = musicInstrument;
  }

  playSong(song) {
    return `${this._Name} is playing ` + song + ` with his ${this._musicInstrument}`;
  }
}

let myWizard = new Wizards('Gandalf', 2019, 'The Hobbits', 'grey');
let myBard = new Bards('Assurancetourix', 40, 'Rainy Days', 'harp')

console.log(myWizard.sayMyName());
console.log(myWizard.castSpell());
console.log(myBard.playSong('Born This Way'));
// console.log(myWizard.playSong('Born This Way'));

console.log(myBard.compareAges(myWizard));


  // const myCharacter = new Character('Guillaume', '36', 'Orion')
  // result = myCharacter.sayMyName()
  //   console.log(myCharacter)
  //   console.log(result)
  //
  // const newCharacter = new Character('Yoda', '900', 'The Rebel Fanfare')
  // result2 = myCharacter.compareAges(newCharacter)
  // console.log(result2)
