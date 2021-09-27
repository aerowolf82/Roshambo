#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

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

class Judge {
    constructor(playMove, compMove){
        this.playMove = playMove;
        this.compMove = compMove;
    }

    decideWinner (){
        if (this.playMove === this.compMove){
            return '~ This game is a TIE! ~';
        } else if (this.playMove === 'rock' && this.compMove === 'paper'){
            return '~ Computer wins! ~';
        } else if (this.playMove === 'rock' && this.compMove === 'scissors'){
            return '~ Player wins! ~';
        } else if (this.playMove === 'paper' && this.compMove === 'scissors'){
            return '~ Computer wins! ~';
        } else if (this.playMove === 'paper' && this.compMove === 'rock'){
            return '~ Player wins! ~';
        } else if (this.playMove === 'scissors' && this.compMove === 'rock'){
            return '~ Computer wins! ~';
        } else if (this.playMove === 'scissors' && this.compMove === 'paper'){
            return '~ Player wins! ~';
        } else{
            return '~ERROR ERROR ERROR~';
        }
    }
}

let retaliation =new RoPaSci();
let judgeWinner = new Judge(input, retaliation.compChoice);
console.log(judgeWinner.compMove + "  " + judgeWinner.playMove);
console.log(judgeWinner.decideWinner());
