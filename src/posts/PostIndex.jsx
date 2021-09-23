import React, { useState, useEffect } from "react";
import APIURL from "../helpers/enviornments";
import Sitebar from "../navbar/Navbar";

const PostIndex = (props) => {
  // const [updateActive, setUpdateActive] = useState(false);
  // const [postToUpdate, setPostToUpdate] = useState({});

  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [mine, setMine] = useState(null);


  const fetchMine = () => {
    fetch(`${APIURL}/post/mine`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((feedData) => {
        setMine(feedData);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Something went wrong. Please try again.")
        return
      });
  };

  useEffect(() => {
    fetchMine();
  }, []);

  const fetchPosts = () => {
    fetch(`${APIURL}/post`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((feedData) => {
        setPosts(feedData);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Something went wrong. Please try again.")
        return
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [props.token]);

  const fetchUsers = () => {
    fetch(`${APIURL}/user`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((UserData) => {
        setUsers(UserData);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Something went wrong. Please try again.")
        return
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>

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
