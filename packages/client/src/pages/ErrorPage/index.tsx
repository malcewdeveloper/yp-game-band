import React from "react";
import { Flex, Typography } from "antd";
import { Redirect, useParams } from "react-router-dom";
import classes from "./ErrorPage.module.scss";

interface IServerErrorParams {
    errorCode: string;
}

const errorMessages: { [key: string]: string } = {
    400: "Некорректный запрос. Пожалуйста, проверьте введенные данные.",
    401: "Неавторизован. Пожалуйста, войдите в систему.",
    403: "Доступ запрещен",
    404: "Страница не найдена :(",
    500: "Внутренняя ошибка сервера :(",
};

export const ErrorPage: React.FC<object> = () => {
    const { errorCode } = useParams<IServerErrorParams>();

    /* eslint-disable no-prototype-builtins*/
    const isValidErrorCode = errorMessages.hasOwnProperty(errorCode);

    if (!isValidErrorCode) {
        return <Redirect to="/error/404" />;
    }

    const message = errorMessages[errorCode];

    return (
        <Flex
            align="center"
            className={classes.root}
            justify="center"
            vertical={true}
        >
            <Typography.Title level={1} className={classes.code}>
                Код {errorCode}
            </Typography.Title>
            <Typography.Title level={2} className={classes.message}>
                {message}
            </Typography.Title>
        </Flex>
    );
};
