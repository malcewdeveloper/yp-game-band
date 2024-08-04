import { AxiosRequestConfig } from "axios";
import { authApi } from "../../service";
import {
    TGetMeReponce,
    TSigInRequest,
    TSignUpResponce,
    TSigUpRequest,
} from "./types";

export const signIn = (data: TSigInRequest, config?: AxiosRequestConfig) => {
    return authApi.post<void>("/auth/signin", data, config);
};

export const signUp = (data: TSigUpRequest, config?: AxiosRequestConfig) => {
    return authApi.post<TSignUpResponce>("/auth/signup", data, config);
};

export const signOut = (config?: AxiosRequestConfig) => {
    return authApi.post<void>("/auth/logout", config);
};

export const getMe = (config?: AxiosRequestConfig) => {
    return authApi.get<TGetMeReponce>("/auth/user", config);
};
