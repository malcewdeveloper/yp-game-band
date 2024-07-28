import { Redirect, Route, Switch } from "react-router-dom";
import { routes, AuthGuard } from "../service";
import { SingIn } from "./SignIn";
import { SingUp } from "./SignUp";
import { Profile } from "./Profile";
import { LeaderBoard } from "./LeaderBoard";
import { Game } from "./Game";
import { Forum } from "./Forum";
import { ErrorPage } from "./ErrorPage";
import ErrorBoundary from "../service/ErrorBoundary";

export const Routes = () => {
    return (
        <ErrorBoundary>
            <Switch>
                <Route exact path="/">
                    <Redirect to={routes.game.path} />
                </Route>
                <Route path={routes.error.path} component={ErrorPage} />
                <Route path={routes.leaderBoard.path} component={LeaderBoard} />
                <Route path={routes.signIn.path} component={SingIn} />
                <Route path={routes.singUp.path} component={SingUp} />
                <Route path={routes.forum.path}>
                    <AuthGuard>
                        <Forum />
                    </AuthGuard>
                </Route>
                <Route path={routes.game.path}>
                    <AuthGuard>
                        <Game />
                    </AuthGuard>
                </Route>
                <Route path={routes.profile.path}>
                    <AuthGuard>
                        <Profile />
                    </AuthGuard>
                </Route>
                <Route path="*" component={ErrorPage} />
            </Switch>
        </ErrorBoundary>
    );
};
