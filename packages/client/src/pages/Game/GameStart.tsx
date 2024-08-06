import React, { useState, useEffect } from "react";
import { Progress, Button, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

export const GameStart: React.FC<object> = () => {
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
