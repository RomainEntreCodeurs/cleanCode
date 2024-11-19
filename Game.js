export default class Game {
    constructor(players) {
        this.players = players;
        this.round = 1;
        this.currentPlayerIndex = 0;
    }

    rollDice() {
        return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    }

    calculateScore(pointsOfDice) {
        return pointsOfDice.reduce((sum, value) => sum + value, 0);
    }

    playTurn(player) {
        console.log(`\nTour de ${player.name}`);

        let dice = this.rollDice();
        console.log(`Lancer des dés : ${dice.join(", ")}`);

        const score = this.calculateScore(dice);
        console.log(`${player.name} : ${score} points`);
        player.addScore(score);
    }


    nextPlayer() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        if (this.currentPlayerIndex === 0) {
            this.round++;
        }
    }

    finishGame() {
        return this.round > 3;
    }

    start() {
        console.log("Début du jeu")
        while (!this.finishGame()) {
            const currentPlayer = this.players[this.currentPlayerIndex];
            this.playTurn(currentPlayer);
            this.nextPlayer();
        }

        console.log("\nRésultat de la partie :");
        this.players.forEach(player => {
            console.log(`${player.name} : ${player.getTotalScore()} points`);
        });

        const winner = this.players.reduce((best, player) => (player.getTotalScore() > best.getTotalScore() ? player : best));
        console.log(`Le gagnant est ${winner.name} avec ${winner.getTotalScore()} points`);
    }
}