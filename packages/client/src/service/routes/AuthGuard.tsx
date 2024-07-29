import React, { PropsWithChildren, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { routes } from "./routeMap";
import { useAuthStore } from "../../entities/auth";
import { LoadingOutlined } from "@ant-design/icons";

export const AuthGuard: React.FC<PropsWithChildren<any>> = ({ children }) => {
    const me = useAuthStore((state) => state.me);
    const loading = useAuthStore((state) => state.loading);
    const getMe = useAuthStore((state) => state.getMe);

    useEffect(() => {
        if (me || loading) return;
        getMe();
    }, [me, loading]);

    if (me) {
        return children;
    } else if (loading) {
        return <LoadingOutlined />;
    } else {
        return <Redirect to={routes.signIn.path} />;
    }
};
