import React, { useEffect, useState } from "react";
import { Avatar, List, Typography, Flex } from "antd";
import VirtualList from "rc-virtual-list";
import classes from "./leaderBoard.module.scss";

interface UserItem {
    email: string;
    gender: string;
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

const fakeDataUrl =
    "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 800;

export const LeaderBoard: React.FC<object> = () => {
    const [data, setData] = useState<UserItem[]>([]);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(data.concat(body.results));
            });
    };

    useEffect(() => {
        appendData();
    }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (
            Math.abs(
                e.currentTarget.scrollHeight -
                    e.currentTarget.scrollTop -
                    ContainerHeight,
            ) <= 1
        ) {
            appendData();
        }
    };

    return (
        <List
            header={
                <Flex
                    align="center"
                    justify="center"
                    vertical={true}
                    className={classes.root}
                >
                    <Typography.Title className={classes.title} level={2}>
                        Рейтинг
                    </Typography.Title>
                </Flex>
            }
        >
            <VirtualList
                data={data}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="email"
                onScroll={onScroll}
            >
                {(item: UserItem) => (
                    <List.Item key={item.email}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.picture.large} />}
                            title={<a href="">{item.name.last}</a>}
                            description={item.email}
                        />
                        <div>{item.email}</div>
                    </List.Item>
                )}
            </VirtualList>
        </List>
    );
};
