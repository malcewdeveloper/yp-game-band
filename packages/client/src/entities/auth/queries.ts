import { authApi } from "../../service";
import {
    TGetMeReponce,
    TSigInRequest,
    TSignUpResponce,
    TSigUpRequest,
} from "./types";

export const signIn = (data: TSigInRequest) => {
    return authApi.post<void>("/auth/signin", data);
};

export const signUp = (data: TSigUpRequest) => {
    return authApi.post<TSignUpResponce>("/auth/signup", data);
};

export const signOut = () => {
    return authApi.post<void>("/auth/logout");
};

export const getMe = () => {
    return authApi.get<TGetMeReponce>("/auth/user");
};
