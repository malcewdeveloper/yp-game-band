import React from "react";
import { CommentList } from "./CommentList";
import { PostView } from "./PostView";

export const Post = () => {
    return (
        <>
            <PostView />
            <CommentList />
        </>
    );
};
