import React, { useEffect } from "react";
import { generatePath, useHistory, useParams } from "react-router-dom";
import { data } from "../mocks";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { routes } from "../../../service";

type TForm = {
    title: string;
    content: string;
};

export const PostView: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const history = useHistory();
    const [form] = useForm<TForm>();

    const isNew = postId === "new";
    const postIndex = postId
        ? data.findIndex((p) => p.id === parseInt(postId))
        : -1;

    const post = data[postIndex];

    const handleSubmit = (values: TForm) => {
        const postsLink = generatePath(routes.posts.path);

        if (isNew) {
            const newPost = {
                id: data.length + 1,
                ...values,
            } as (typeof data)[number];

            data.push(newPost);
        } else {
            const updatedPost = { ...post, ...values };
            console.log(updatedPost);
            data.splice(postIndex, 1, updatedPost);
        }

        history.replace(postsLink);
    };

    useEffect(() => {
        form.setFieldsValue(post);
    }, [postId]);

    if (postId !== "new" && !post) {
        return <div>Post not found</div>;
    }

    return (
        <>
            <Form<TForm>
                layout="vertical"
                form={form}
                initialValues={post}
                onFinish={handleSubmit}
            >
                <Form.Item name="title" label="Title" required>
                    <Input />
                </Form.Item>
                <Form.Item name="content" label="Content" required>
                    <TextArea rows={4} />
                </Form.Item>
            </Form>
            <Button onClick={form.submit}>Сохранить</Button>
        </>
    );
};
