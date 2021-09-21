import React, { useReducer, useState } from "react";
import PostUpdate from "./PostUpdate";
import PostDelete from "./PostDelete";
import LikeButton from "./LikeButton";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import Search from "./Search";

const PostFeed = (props) => {
  console.log(props.users);
  console.log(props.posts);
  console.log(props.token);

  const [dropdownOpen, setOpen] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const profileImage = localStorage.getItem("profileImage");

  const joinArrays = (userArr, postArr) => {
    if (!userArr || !postArr) return;
    return postArr.map((post) => [
      post,
      ...userArr.filter((u) => u.id == post.owner),
    ]);
  };

  console.log(joinArrays(props.users, props.posts));

  const postMapper = () => {
    if (!props.users || !props.posts) return;
    return joinArrays(props.users, props.posts)
      .sort((a, b) => a[0].id - b[0].id)
      .reverse()
      .map((post, index) => {
        const createdAt = new Date(post[0].createdAt);
        const createdDate = createdAt.toLocaleDateString("en-US");
        const createdTime = createdAt.toLocaleTimeString([], {
          timeStyle: "short",
        });

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <tr key={index}>
              <div className="postContainer" style={{ textAlign: "left" }}>
                <div className="userHeader">
                  <img
                    className="userProfilePic"
                    src={post[1].profileImage}
                    alt="user"
                  />
                  <span className="userName">{post[1].userName}</span>
                </div>
                <div className="picture">
                  <img src={post[0].image} alt="post image" />
                </div>
                <div className="postActions">
                  <div className="like">
                    <LikeButton />
                  </div>
                  <div
                    className="delete"
                    style={{
                      display:
                        post[1].profileImage === profileImage
                          ? "block"
                          : "none",
                    }}
                  >
                    <PostDelete
                      style={{ marginLeft: "auto" }}
                      post={post[0]}
                      token={props.token}
                      fetchPosts={props.fetchPosts}
                      fetchMine={props.fetchMine}
                    />
                  </div>
                  <div
                    className="edit"
                    style={{
                      display:
                        post[1].profileImage === profileImage
                          ? "block"
                          : "none",
                    }}
                  >
                    <PostUpdate
                      post={post[0]}
                      token={props.token}
                      fetchPosts={props.fetchPosts}
                      fetchMine={props.fetchMine}
                    />
                  </div>
                </div>
                <div className="postDetails">
                  <hr style={{ marginTop: "0em" }} />
                  <div className="description">
                    <span className="userName-description">
                      {post[1].userName}
                    </span>{" "}
                    {post[0].description}
                  </div>
                  <div className="postMeta">
                    <div className="category">{post[0].category}</div>
                    <div className="dot">{"•"}</div>
                    <div className="time">
                      {createdDate} at {createdTime}
                    </div>
                  </div>
                </div>
              </div>
            </tr>
          </div>
        );
      });
  };

  return (
    <div>
      <div className="filter">
        <Search
          style={{ maxWidth: 200 }}
          token={props.token}
          fetchPosts={props.fetchPosts}
          fetchMine={props.fetchMine}
          setPosts={props.setPosts}
        />
      </div>
      {postMapper()}
    </div>
  );
};

export default PostFeed;
