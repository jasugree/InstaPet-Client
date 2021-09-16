import React, {useEffect} from 'react';
import PostDelete from './PostDelete';
import PostUpdate from './PostUpdate';
import {Modal} from "reactstrap";


const UserFeed = (props) => {
  console.log(props.users);
  console.log(props.mine);

  const joinArrays = (userArr, postArr) => {
    if (!userArr || !postArr) return;
    return postArr.map((post) => [
      post,
      ...userArr.filter((u) => u.id == post.owner),
    ]);
  };

  console.log(joinArrays(props.users, props.posts));

  


    const postMapper = () => {
        if(!props.users || !props.mine) return
        return joinArrays(props.users, props.mine).slice(0).reverse().map((post, index) =>{

            const createdAt = new Date(post[0].createdAt);
            const createdDate = createdAt.toLocaleDateString('en-US');
            const createdTime = createdAt.toLocaleTimeString('en-US')
            
            return(
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> 
                <tr key={index}>
                    <div className="postContainer" style={{textAlign: 'left'}}>
                        <div className="userHeader">
                            <img className="userProfilePic" src={post[1].profileImage} alt="user"/>
                            <span className="userName">{post[1].firstName} {post[1].lastName}</span>
                        </div>
                        <div className="picture">
                            <img src={post[0].image} alt="post image" />
                        </div>
                <div className="postDetails">
                    <div className="timeLike">
                        <div className="time">
                            {createdDate} at {createdTime}
                        </div>
                        <div className="likes">
                            {post[0].likes}
                        </div>
                    </div>
                    <div className="description">
                        {post[0].description}
                    </div>
                    
                    <PostUpdate post={post[0]} token={props.token} fetchPosts={props.fetchPosts} />
                    <div className="category">
                        {post[0].category}
                    </div>
                    <PostDelete />
                    

                
                
                </div>
              </div>
            </tr>
          </div>
        );
      });
  };

  return <div>{postMapper()}</div>;
};

export default UserFeed;
