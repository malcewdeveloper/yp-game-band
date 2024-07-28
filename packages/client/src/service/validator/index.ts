import { RuleObject } from "antd/es/form";

export const validationName = (_: RuleObject, value: string) => {
    if (!value) {
        return Promise.reject("Поле не может быть пустым");
    }

    if (!/^[A-ZА-Я][a-zа-я]*$/.test(value)) {
        return Promise.reject(
            "Укажите ваше имя с заглавной буквы и без пробелов",
        );
    }

    return Promise.resolve();
};

export const validateLogin = (_: RuleObject, value: string) => {
    if (!value) {
        return Promise.reject("Пожалуйста, укажите ваш логин");
    }

    if (value.length < 2) {
        return Promise.reject("Логин должен содержать не менее двух символов.");
    }

    if (!/^[a-zA-Z0-9-]+$/.test(value)) {
        return Promise.reject(
            "Используйте только латинские буквы, цифры и дефисы.",
        );
    }

    return Promise.resolve();
};

export const validatePassword = (_: RuleObject, value: string) => {
    if (!value) {
        return Promise.reject("Пожалуйста, укажите ваш пароль");
    }

    if (value.length < 6) {
        return Promise.reject("Пароль должен содержать минимум 6 символов");
    }

    if (!/[A-Z]/.test(value)) {
        return Promise.reject(
            "Пароль должен содержать хотя бы одну заглавную букву",
        );
    }

    if (!/\d/.test(value)) {
        return Promise.reject("Пароль должен содержать хотя бы одну цифру");
    }

    if (!/[a-zA-Z0-9]/.test(value)) {
        return Promise.reject(
            "Пароль может содержать только латинские буквы и цифры",
        );
    }

    return Promise.resolve();
};

export const validateEmail = (_: RuleObject, value: string) => {
    if (!value) {
        return Promise.reject("Пожалуйста, укажите электронную почту");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return Promise.reject("Укажите корректный адрес электронной почты");
    }

    return Promise.resolve();
};

export const validatePhone = (_: RuleObject, value: string) => {
    if (!value) {
        return Promise.reject("Пожалуйста, укажите ваш номер телефона");
    }

    if (!/^(?:\+7|7)\d{10}$/.test(value)) {
        return Promise.reject(
            "Введите номер телефона в формате +7xxxxxxxx или 7xxxxxxxx.",
        );
    }

    return Promise.resolve();
};
