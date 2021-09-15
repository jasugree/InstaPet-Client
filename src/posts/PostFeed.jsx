import React, { useReducer, useState, useEffect } from 'react';
import {Button, Modal, ModalHeader, Row, Col, Container} from 'reactstrap';
import LikeButton from './LikeButton';
import PostDelete from './PostDelete';
import PostUpdate from './PostUpdate';

const PostFeed = (props) => {
    console.log(props.users);
    console.log(props.posts);

    const [posts, setPosts] = useState([]);
    
    const [updateActive, setUpdateActive] = useState(false);
    const [postToUpdate, setPostToUpdate] = useState({})

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

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
            props.setUsers(UserData);
          });
      };
    
      useEffect(() => {
        fetchUsers();
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
      }, []);

    const PostUpdate = (posts) => {
        setPostToUpdate(posts);
        console.log(posts)
      }
    
      const updateOn = () => {
        setUpdateActive(true);
      }
    
      const updateOff = () => {
        setUpdateActive(false)
      }

      

    const joinArrays = (userArr, postArr) => {
        if(!userArr || !postArr) return
        return postArr.map(post=>[post, ...userArr.filter(u=>u.id==post.owner)])
      }

      console.log(joinArrays(props.users, props.posts))

    const postMapper = () => {
        if(!props.users || !props.posts) return
        return joinArrays(props.users, props.posts).slice(0).reverse().map((post, index) =>{

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
                    <div className="category">
                        {post[0].category}
                    </div>

                    <div >
                    {/* <Container>
                        <Row>
                            <Col>
                                 <PostUpdate  token={props.token} fetchPosts={fetchPosts} posts={props.posts} fetchUsers={fetchUsers} users={props.users} />
                            </Col>
                        </Row>
                    </Container> */}
                    <PostUpdate />

                    <LikeButton alignItems="right" />
                    </div>
                    
                </div>
                </div>
                </tr>
                </div>
            )
        })
    }
    


    return ( 
        <div>
            {postMapper()}
        </div>
     );
}
 
export default PostFeed;