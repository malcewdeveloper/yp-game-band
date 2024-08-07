import Entity from "./Entity";

export default class Reflector extends Entity {
    _angle: number;
    _canvas: HTMLCanvasElement;

    constructor(x: number, y: number, canvas: HTMLCanvasElement) {
        super(x, y, 25, 25);

        this._angle = 0;
        this._canvas = canvas;

        this._canvas.addEventListener("click", this._handleClick);
    }

    private _handleClick = (event: MouseEvent) => {
        // Плохое и не точное отслеживание клика по рефлектору
        const rect = this._canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        if (
            clickX >= this.x - this.width! / 2 &&
            clickX <= this.x - this.width! / 2 + this.width! &&
            clickY >= this.y &&
            clickY <= this.y + this.height!
        ) {
            this.rotate();
        }
    };

    public rotate(): void {
        this._angle = (this._angle + 90) % 360;
    }

    public update(deltaTime: number): void {
        console.log(deltaTime);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate((this._angle * Math.PI) / 180);

        ctx.fillStyle = "grey";
        ctx.beginPath();
        ctx.moveTo(-this.width! / 2, this.height! / 2); // Левая нижняя точка
        ctx.lineTo(this.width! / 2, this.height! / 2); // Правая нижняя точка
        ctx.lineTo(-this.width! / 2, -this.height! / 2); // Верхняя левая точка
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }
}
