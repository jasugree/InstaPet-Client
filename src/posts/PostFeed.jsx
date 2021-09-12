import React, { useReducer } from "react";

const PostFeed = (props) => {
  console.log(props.users);
  console.log(props.posts);

  const joinArrays = (userArr, postArr) => {
    if (!userArr || !postArr) return;
    return postArr.map((post) => [
      post,
      ...userArr.filter((u) => u.id === post.owner),
    ]);
  };

  console.log(joinArrays(props.users, props.posts));

  const postMapper = () => {
    if (!props.users || !props.posts) return;
    return joinArrays(props.users, props.posts)
      .slice(0)
      .reverse()
      .map((post, index) => {
        const createdAt = new Date(post[0].createdAt);
        const createdDate = createdAt.toLocaleDateString("en-US");
        const createdTime = createdAt.toLocaleTimeString("en-US");

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
                  <img className="userProfilePic" src="test" alt="user" />
                  <span className="userName">test test</span>
                </div>
                <div className="picture">
                  <img src="test" alt="post image" />
                </div>
                <div className="postDetails">
                  <div className="timeLike">
                    <div className="time">
                      {createdDate} at {createdTime}
                    </div>
                    <div className="likes">test</div>
                  </div>
                  <div className="description">test</div>
                  <div className="category">test</div>
                </div>
              </div>
            </tr>
          </div>
        );
      });
  };

  return <div>{postMapper()}</div>;
};

export default PostFeed;
