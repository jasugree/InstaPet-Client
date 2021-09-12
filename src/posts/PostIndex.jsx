import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Sitebar from "../navbar/Navbar";
import PostFeed from "./PostFeed";
import PostCreate from "./PostCreate";
import PostUpdate from "./PostUpdate";

const PostIndex = (props) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [postToUpdate, setPostToUpdate] = useState({})
  

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

  const editPostUpdate = (update) => {
    setPostToUpdate(update);
    console.log(update)
  }

  const updateOn = () => {
    setUpdateActive(true);
  }

  const updateOff = () => {
    setUpdateActive(false)
  }


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

  return (
    <div>
      <Sitebar token={props.token} clickLogout={props.clearToken} />
      <Container>
        <Row>
          <Col>
            <PostFeed posts={posts} editPostUpdate={editPostUpdate} updateOn={updateOn}  fetchUsers={fetchUsers} users={users} fetchPosts={fetchPosts} token={props.token}  />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostIndex;
