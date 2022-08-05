// 记分板模块
class ScorePanel {
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    score: number = 0;
    level: number = 1;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel:number = 10, upScore:number = 10) {
        this.scoreEle = document.getElementById('score') as HTMLElement; // as 断言
        this.levelEle = document.getElementById('level')!; // 或者 ！

        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';

        if (this.score % this.upScore == 0) {
            this.upLevel();
        }
    }

    // 升级
    upLevel() {
        if  (this.level >= 10) return;

        this.levelEle.innerHTML = ++this.level + '';
    }
}

// 测试代码
// const scoreP = new ScorePanel(100, 10);

// for(let i=0;i<200;i++) {
//     scoreP.addScore();
// }

export default ScorePanel;