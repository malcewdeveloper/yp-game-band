import React from "react";
import { Game, Reflector } from "../../core";
import { Emitter, Battery } from "../../core";

const CanvasGame: React.FC<object> = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const gameRef = React.useRef<Game | null>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        gameRef.current = new Game(canvas.id);
        const reflector = new Reflector(20, 50, canvas);
        const emitter = new Emitter(20, 120, { dx: 0, dy: -1 });
        const battery = new Battery(100, 50);

        gameRef.current.addEntity(reflector);
        gameRef.current.addEntity(emitter);
        gameRef.current.addEntity(battery);

        gameRef.current.start();

        return () => {
            gameRef.current?.stop();
        };
    }, []);

    return (
        <canvas
            id="game"
            ref={canvasRef}
            width={500}
            height={800}
            style={{ border: "2px solid black" }}
        ></canvas>
    );
};

export default CanvasGame;
