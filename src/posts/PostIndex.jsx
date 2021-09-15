import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Sitebar from "../navbar/Navbar";
import PostFeed from "./PostFeed";
import PostUpdate from "./PostUpdate";

const PostIndex = (props) => {

  // const [updateActive, setUpdateActive] = useState(false);
  const [postToUpdate, setPostToUpdate] = useState({})
  

  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);


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
  }, []);

  


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
  }, []);


console.log(posts)
console.log(users)
  return (
    <div>
      <Sitebar  token={props.token} fetchPosts={fetchPosts} clickLogout={props.clearToken} />
      <Container>
        <Row>
          <Col>
            <PostFeed postToUpdate={postToUpdate} posts={posts} fetchUsers={fetchUsers} users={users} fetchPosts={fetchPosts} token={props.token}  />
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default PostIndex;
