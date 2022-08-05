// 游戏控制器

import ScorePanel from './ScorePanel';
import Snake from './Snake';
import Food from './Food';


class GameControl {
    scorePanel: ScorePanel;
    snake: Snake;
    food: Food;
    X:number = 0;
    Y:number = 0;
    // 蛇是否活着
    isLive: boolean = true;
    direction: string = 'ArrowRight';

    constructor () {
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();
        this.food = new Food();

        this.init();
    }

    // 初始化游戏
    init() {
        document.addEventListener("keyup", this.keyClickHandler.bind(this));

        this.run();
    }

    // 开始游戏
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction) {
            case 'ArrowUp':
                Y -= 10;
                break;
            case 'ArrowDown':
                Y += 10;
                break;
            case 'ArrowLeft':
                X -= 10;
                break;
            case 'ArrowRight':
                X += 10;
                break;
        }

        // 检测吃到食物
        this.checkEat(X, Y);

        // 修改蛇坐标
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch(e) {
            console.log(e);
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    checkEat(X:number, Y:number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();

            this.scorePanel.addScore();

            this.snake.addBodies();
        }
    }

    keyClickHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }
}

export default GameControl;