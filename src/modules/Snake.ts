// 蛇的类

class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake') as HTMLElement;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.element.getElementsByTagName('div')!;
        
    }

    // 获取蛇头X坐标
    get X() {
        return this.head.offsetLeft;
    }
    // 设置蛇头X坐标
    set X(value:number) {
        if (value === this.X) return;

        if (value < 0 || value > 290) {
            throw new Error("蛇撞死了");
        }

        let preBody = this.bodies[1];
        let preVal = preBody && (preBody as HTMLElement).offsetLeft;
        if (value === preVal) {
            if (value < this.X) {
                // 新值 < 旧值，说明向左，则掉头前应该向右
                value = this.X + 10;
            } else {
                // 新值 > 旧值，说明向右，则掉头前应该向左
                value = this.X - 10;
            }
        }

        // 移动身体
        this.moveBodies();

        this.head.style.left = value + 'px';

        this.checkHeadBody();
    }
    // 获取蛇头Y坐标
    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇头Y坐标
    set Y(value: number) {
        if (value === this.Y) return;

        if (value < 0 || value > 290) {
            throw new Error("蛇撞死了");
        }

        let preBody = this.bodies[1];
        let preVal = preBody && (preBody as HTMLElement).offsetTop;
        if (value === preVal) {
            if (value < this.Y) {
                // 新值 < 旧值，说明向上，则掉头前应该向下
                value = this.Y + 10;
            } else {
                // 新值 > 旧值，说明向下，则掉头前应该向上
                value = this.Y - 10;
            }
        }

        // 移动身体
        this.moveBodies();

        this.head.style.top = value + 'px';

        this.checkHeadBody();
    }

    // 蛇增加身体
    addBodies() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    // 蛇移动身体
    moveBodies() {
        /**
         * 倒数第 1 个 移动到倒数第 2 个位置
         * 倒数第 2 个 移动到倒数第 3 个位置
         * ...
         * 注意：链表 从后向前移动，否则位置回丢失
         */
        for(let i=this.bodies.length - 1;i>0;i--) {
            let x = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }

    // 检查是否穿过身体
    checkHeadBody() {
        for (let i=1;i<this.bodies.length;i++) {
            let bd = this.bodies[i] as HTMLElement;

            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到身体了！！')
            }
        }
    }
}

export default Snake;
