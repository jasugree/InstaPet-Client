import React, { useState, useEffect } from "react";
import Sitebar from "../navbar/Navbar";

const PostIndex = (props) => {
  // const [updateActive, setUpdateActive] = useState(false);
  const [postToUpdate, setPostToUpdate] = useState({});

  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [mine, setMine] = useState(null);

  const fetchMine = () => {
    fetch("http://localhost:3001/post/mine", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((feedData) => {
        setMine(feedData);
      });
  };

  useEffect(() => {
    fetchMine();
  }, []);

  const fetchPosts = () => {
    fetch("http://localhost:3001/post", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((feedData) => {
        setPosts(feedData);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [props.token]);

  const fetchUsers = () => {
    fetch("http://localhost:3001/user", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((UserData) => {
        setUsers(UserData);
      });
  };

  useEffect(() => {
    fetchUsers();
    debugger
  }, []);

  console.log(posts);
  console.log(users);
  return (
    <div>
      {/* <Sitebar  token={props.token} fetchPosts={fetchPosts} clickLogout={props.clearToken} />
      <Container>
        <Row>
          <Col>
            <PostFeed postToUpdate={postToUpdate} posts={posts} fetchUsers={fetchUsers} users={users} fetchPosts={fetchPosts} token={props.token}  />
>>>>>>> bdd594e4f008a9b4f294bafdd91d79dd2223a2f9
          </Col>
        </Row>
      </Container> */}

      <Sitebar
        token={props.token}
        fetchPosts={fetchPosts}
        setPosts={setPosts}
        posts={posts}
        users={users}
        fetchMine={fetchMine}
        mine={mine}
        clickLogout={props.clearToken}
      />
    </div>
  );
};

export default PostIndex;
