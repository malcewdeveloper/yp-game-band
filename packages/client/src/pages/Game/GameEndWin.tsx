import React, { useEffect } from "react";
import { Button } from "antd";
import { StarTwoTone, SyncOutlined } from "@ant-design/icons";

export const GameEndWin: React.FC<object> = () => {
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
