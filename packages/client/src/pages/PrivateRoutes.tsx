import { Route, Switch } from "react-router-dom";
import { routes } from "../service";
import { Forum } from "./Forum";
import { Game } from "./Game";
import { Profile } from "./Profile";
import { DefaultPage } from "./DefaultPage";
import "../service/HTTPClient/authInterceptors";
import {
    removeAuthInterceptors,
    setAuthInterceptors,
} from "../service/HTTPClient/authInterceptors";
import { useLayoutEffect } from "react";

export const PrivateRoutes = () => {
    useLayoutEffect(() => {
        setAuthInterceptors();

        return () => {
            removeAuthInterceptors();
        };
    }, []);

    return (
        <Switch>
            <Route path={routes.forum.path} component={Forum} />
            <Route path={routes.game.path} component={Game} />
            <Route path={routes.profile.path} component={Profile} />
            <Route path="*" component={DefaultPage} />
        </Switch>
    );
};
