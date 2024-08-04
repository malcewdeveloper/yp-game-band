import Entity from "./Entity";
import Lazer from "./Lazer";

export default class Emitter extends Entity {
    private _lazer: Lazer;
    private _direction: { dx: number; dy: number };

    constructor(x: number, y: number, direction: { dx: number; dy: number }) {
        super(x, y);

        this._direction = direction;
        this._lazer = new Lazer(x, y, 100, this._direction);
    }

    public update(deltaTime: number): void {
        this._lazer.update(deltaTime);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        this._lazer.render(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = "blue";
        ctx.fill();
    }
}
