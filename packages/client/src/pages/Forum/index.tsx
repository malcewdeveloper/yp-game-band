import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../service";
import { PostList } from "./PostList";
import { Post } from "./Post";

export const Forum: React.FC = () => {
    return (
        <Switch>
            <Route path={routes.post.path} component={Post} />
            <Route path={routes.posts.path} component={PostList} />
        </Switch>
    );
};
