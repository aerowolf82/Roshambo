#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
//argv.move   ==  the arg they want us to use

/*  Example input/output
$ node main.js --move=rock
Playing a game of Roshambo against the computer.
Player plays rock!
Computer plays paper!
~Computer wins.~
*/
const input = argv.move.toLowerCase();
console.log('Starting Rock-Paper-Scissors game against the computer')
console.log(`You play ${input}!`);


class RoPaSci {
  constructor (){
    this.ra = ['rock', 'paper', 'scissors'];
  }
  get compChoice(){
    return this.ra[Math.floor(Math.random() * 3)];
  }
}
let retaliation =new RoPaSci();
console.log(retaliation.compChoice);



/*  Found...I mean...plundered...code...

const input = argv.move.toLowerCase();

console.log('Playing a game of Roshambo against the computer.');

class Roshambo {
    constructor () {
        this.arr = ['rock', 'paper', 'scissors'];
    }

    showPlays = (input, compChose) => {
        console.log(`Player plays ${input}`);
        console.log(`Computer plays ${compChose}`)
    }

    calcWinner (input , compChose) {
        if (input === 'rock' && compChose === 'paper'){
            this.showPlays(input, compChose);
            console.log(this.compWins());
        } else if (input === 'rock' && compChose === 'scissors'){
            this.showPlays(input, compChose);
            console.log(this.playerWins());
        } else if (input === 'rock' && compChose === 'rock'){
            this.showPlays(input, compChose);
            console.log(this.tieGame());
        } else if (input === 'paper' && compChose === 'scissors'){
            this.showPlays(input, compChose);
            console.log(this.compWins());
        } else if (input === 'paper' && compChose === 'paper'){
            this.showPlays(input, compChose);
            console.log(this.tieGame());
        } else if (input === 'paper' && compChose === 'rock'){
            this.showPlays(input, compChose);
            console.log(this.playerWins());
        } else if (input === 'scissors' && compChose === 'scissors'){
            this.showPlays(input, compChose);
            console.log(this.tieGame());
        } else if (input === 'scissors' && compChose === 'rock'){
            this.showPlays(input, compChose);
            console.log(this.compWins());
        } else if (input === 'scissors' && compChose === 'paper'){
            this.showPlays(input, compChose);
            console.log(this.playerWins());
        } else {
            console.log(`Error - ${input} and ${compChose}`)
        }
    }

    compWins = () => '~ Computer wins! ~';
    playerWins = () => '~ Player wins! ~';
    tieGame = () =>'~ Tie Game! ~';
}

class Player extends Roshambo{
    constructor() {
        super()
        this.move = input;
    }
}

class Computer extends Roshambo{
    constructor() {
        super();
        this.move = this.arr[Math.floor(Math.random() * 3)];
    }
}

let player = new Player();
let computer = new Computer();
let roshambo = new Roshambo();
roshambo.calcWinner(player.move,computer.move)


*/
