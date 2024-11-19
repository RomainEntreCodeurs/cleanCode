import Game from "./Game.js";
import {question, questionInt} from "readline-sync";
import Player from "./Player.js";

const numPlayers = questionInt("Entrez le nombre de joueurs (entre 2 et 4) : ");
if (numPlayers < 2 || numPlayers > 4) {
    console.log("Il faut entre 2 et 4 joueurs");
}

const players = [];
for (let i = 0; i < numPlayers; i++) {
    const playerName = question(`Entrez le nom du joueur ${i + 1} : `);
    players.push(new Player(playerName));
}

const game = new Game(players);
game.start();