import React, { useEffect } from "react";
import { fetchPosts } from "../redux/posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { List, Card } from "antd";

const Post = URL => {
  const { posts } = useSelector(state => ({
    posts: state.posts.posts
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(URL));
  }, []);

  return (
    <>
      <div className="container">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={posts}
          renderItem={item => (
            <List.Item>
              <Card title={item.id}>{<p>{item.text}</p>}</Card>
            </List.Item>
          )}
        />
        {/* {posts.map(event => (
          <div key={event.id}>{event.text}</div>
        ))} */}
      </div>
    </>
  );
};

export default Post;
