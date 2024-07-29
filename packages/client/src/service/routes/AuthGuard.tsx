import React, { PropsWithChildren } from "react";
import { Redirect } from "react-router-dom";
import { routes } from "./routeMap";
import { useAuthStore } from "../../entities/auth";

export const AuthGuard: React.FC<PropsWithChildren<any>> = ({ children }) => {
    const me = useAuthStore((state) => state.me);

    if (me) {
        return children;
    } else {
        return <Redirect to={routes.signIn.path} />;
    }
};
