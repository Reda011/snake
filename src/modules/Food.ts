// 食物 Food 类
class Food {
    // element对象 代表食物对应元素
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food') as HTMLElement;
    }
    // 食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 随机生成食物位置
    change() {
        let left = Math.round(Math.random() * 29) * 10; 
        let top = Math.round(Math.random() * 29) * 10; 

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}


/* 
// 测试代码
const food = new Food();
console.log(food.X, food.Y);

food.change();
console.log(food.X, food.Y); */

export default Food;