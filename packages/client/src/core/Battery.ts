import Entity from "./Entity";

export default class Battery extends Entity {
    constructor(x: number, y: number) {
        super(x, y, 15, 25);
    }

    public update(deltaTime: number): void {
        console.log(deltaTime);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.fillRect(
            this.x,
            this.y - this.height! / 4,
            this.width!,
            this.height!,
        );
    }
}
