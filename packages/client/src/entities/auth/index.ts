import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getMe, signIn, signOut, signUp } from "./queries";
import {
    TGetMeReponce,
    TSigInRequest,
    TSignUpResponce,
    TSigUpRequest,
} from "./types";
import { TAuthError } from "../../service";
import { isAxiosError } from "axios";
import { notification } from "antd";

type TAuthActions = {
    signIn: (data: TSigInRequest) => Promise<void>;
    signUp: (data: TSigUpRequest) => Promise<TSignUpResponce | undefined>;
    signOut: () => Promise<void>;
    getMe: () => Promise<TGetMeReponce | undefined>;
};

type TAuthData = {
    me?: TGetMeReponce;
    loading: boolean;
};

type TAuthStore = TAuthActions & TAuthData;

const initialState: TAuthData = {
    me: undefined,
    loading: false,
};

export const useAuthStore = create<TAuthStore>()(
    devtools(
        (set, get) => ({
            ...initialState,
            signIn: async (data) => {
                try {
                    const reponce = await signIn(data);
                    await get().getMe();

                    return reponce.data;
                } catch (error: unknown) {
                    if (isAxiosError<TAuthError>(error)) {
                        notification.error({
                            message: error.response?.data.reason,
                        });
                    } else {
                        console.log(error);
                    }

                    throw error;
                }
            },
            signUp: async (data) => {
                try {
                    const reponce = await signUp(data);
                    await get().getMe();

                    return reponce.data;
                } catch (error: unknown) {
                    if (isAxiosError<TAuthError>(error)) {
                        notification.error({
                            message: error.response?.data.reason,
                        });
                    } else {
                        console.log(error);
                    }

                    throw error;
                }
            },
            signOut: async () => {
                try {
                    const responce = await signOut();

                    set((store) => {
                        store.me = initialState.me;
                        return store;
                    });

                    return responce.data;
                } catch (error: unknown) {
                    if (isAxiosError<TAuthError>(error)) {
                        notification.error({
                            message: error.response?.data.reason,
                        });
                    } else {
                        console.log(error);
                    }

                    throw error;
                }
            },
            getMe: async () => {
                set((store) => {
                    store.loading = true;
                    return store;
                });

                try {
                    const responce = await getMe();
                    const { data } = responce;

                    set((store) => {
                        store.me = data;
                        return store;
                    });

                    return data;
                } catch (error: unknown) {
                    if (isAxiosError<TAuthError>(error)) {
                        notification.error({
                            message: error.response?.data.reason,
                        });
                    } else {
                        console.log(error);
                    }

                    throw error;
                } finally {
                    set((store) => {
                        store.loading = false;
                        return store;
                    });
                }
            },
        }),
        { name: "Auth store" },
    ),
);
