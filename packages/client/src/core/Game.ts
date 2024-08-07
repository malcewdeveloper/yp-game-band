import Entity from "./Entity";

export default class Game {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _lastTime = 0;
    private _entities: Entity[] = [];
    private _running = false;

    constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d")!;
    }

    private init() {
        console.log("init!");
    }

    private resizeCanvas() {
        console.log("canvas resize!");
    }

    public addEntity(entity: Entity): void {
        this._entities.push(entity);
    }

    public removeEntity(entity: Entity): void {
        this._entities = this._entities.filter((e) => e !== entity);
    }

    public start(): void {
        this._running = true;
        requestAnimationFrame(this._gameLoop.bind(this));
    }

    public stop(): void {
        this._running = false;
    }

    private _update(deltaTime: number): void {
        this._entities.forEach((entity) => entity.update(deltaTime));
    }

    private _render(): void {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._entities.forEach((entity) => entity.render(this._ctx));
    }

    private _gameLoop(timestamp: number): void {
        if (this._lastTime === 0) {
            this._lastTime = timestamp;
        }

        const deltaTime = timestamp - this._lastTime;

        if (this._running) {
            this._update(deltaTime);
            this._render();
            this._lastTime = timestamp;
            requestAnimationFrame(this._gameLoop.bind(this));
        }
    }
}
