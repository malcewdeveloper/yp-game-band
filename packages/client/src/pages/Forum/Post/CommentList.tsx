import React, { useState } from "react";
import { List, Form, Input, Button, Space, Avatar } from "antd";
import { useForm } from "antd/es/form/Form";
import { useParams } from "react-router-dom";
import { data } from "../mocks";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";

export interface Comment {
    id: number;
    content: string;
}

export const CommentList: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    /* remove after add api */
    const [_, update] = useState(0);

    const isNew = postId === "new";
    const postIndex = postId
        ? data.findIndex((p) => p.id === parseInt(postId))
        : -1;

    const post = data[postIndex];
    const comments = post?.comments || [];

    const [form] = useForm<Comment>();

    const handleSubmit = (values: Comment) => {
        comments.push({ ...values, id: comments.length + 1 });

        data[postIndex].comments = [...comments];
        form.resetFields();

        /* remove after add api */
        update(Math.random());
    };

    if (isNew || !post) return null;

    return (
        <>
            <List<Comment>
                itemLayout="vertical"
                size="large"
                dataSource={comments}
                renderItem={(item, index) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <>
                                действие 1 <StarOutlined />
                            </>,
                            <>
                                действие 2 <LikeOutlined />
                            </>,
                        ]}
                    >
                        <List.Item.Meta
                            title="Comment title"
                            description="Comment description"
                            avatar={
                                <Avatar
                                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                                />
                            }
                        />
                        {item.content}
                    </List.Item>
                )}
            />
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
                <Form.Item name="content" label="Комментарий" required>
                    <Space.Compact block size="large">
                        <Input />
                        <Button
                            type="primary"
                            shape="round"
                            onClick={form.submit}
                        >
                            Add Comment
                        </Button>
                    </Space.Compact>
                </Form.Item>
            </Form>
        </>
    );
};
