import React, { useState, useEffect } from "react";
import { Progress, Button, Tooltip } from "antd";
import {
    InfoCircleOutlined,
    StarTwoTone,
    SyncOutlined,
} from "@ant-design/icons";

const GameStart: React.FC<object> = () => {
    const [percent, setpercent] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setpercent(25);
        }, 1000);
        setTimeout(() => {
            setpercent(50);
        }, 2000);
        setTimeout(() => {
            setpercent(75);
        }, 3000);
        setTimeout(() => {
            setpercent(100);
        }, 4000);
    }, []);

    return (
        <div
            style={{
                boxShadow: "0px 0px 12px #444",
                width: "400px",
                height: "200px",
                display: "flex",
                margin: "0 auto",
                flexDirection: "column",
            }}
        >
            <h1 style={{ margin: "20px auto" }}>Game: Lazer overload</h1>
            <Tooltip title="Правила игры">
                <InfoCircleOutlined
                    style={{ marginLeft: "auto", padding: "0 20px 0 0" }}
                />
            </Tooltip>
            <Progress
                percent={percent}
                style={{ width: "300px", margin: "0 auto" }}
            />
            <Button type="primary" style={{ width: "100px", margin: "0 auto" }}>
                Старт
            </Button>
        </div>
    );
};

const GameEndWin: React.FC<object> = () => {
    return (
        <div
            style={{
                boxShadow: "0px 0px 12px #444",
                width: "400px",
                height: "200px",
                display: "flex",
                margin: "0 auto",
                flexDirection: "column",
            }}
        >
            <div style={{ margin: "5px auto" }}>
                <StarTwoTone />
                <StarTwoTone />
            </div>
            <p style={{ margin: "5px auto" }}>1-13</p>
            <h2 style={{ margin: "5px auto" }}>Уровень пройден</h2>
            <h1 style={{ margin: "5px auto" }}>Отлично сработано!</h1>
            <div
                style={{
                    margin: "5px auto",
                    gap: "10px",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <SyncOutlined />
                <Button
                    type="primary"
                    style={{
                        width: "100px",
                        margin: "0 auto",
                    }}
                >
                    Продолжить
                </Button>
                <Button
                    type="primary"
                    style={{
                        width: "100px",
                        margin: "0 auto",
                    }}
                >
                    Выход из игры
                </Button>
            </div>
        </div>
    );
};

const GameEndLose: React.FC<object> = () => {
    return <div>2</div>;
};

export const Game: React.FC<object> = () => {
    return <GameEndWin />;
};
