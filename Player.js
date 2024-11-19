export default class Player {
    constructor(name) {
        this.name = name;
        this.scores = [];
    }

    addScore(score) {
        this.scores.push(score);
    }

    getTotalScore() {
        return this.scores.reduce((sum, score) => sum + score, 0);
    }
}
