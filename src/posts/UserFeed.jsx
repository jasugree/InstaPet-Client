import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
// // const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage'));
// // const [userName, setUserName] = useState(localStorage.getItem('userName'));
// const profileImage = localStorage.getItem('profileImage');
// const userName = localStorage.getItem('userName');

// // useEffect(() =>{
// //     setProfileImage()
// // })
const UserFeed = (props) => {
    const profileImage = localStorage.getItem('profileImage');
    const userName = localStorage.getItem('userName');
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
        if (!props.users || !props.mine) return
        return joinArrays(props.users, props.mine).slice(0).reverse().map((post, index) => {
            const createdAt = new Date(post[0].createdAt);
            const createdDate = createdAt.toLocaleDateString('en-US');
            const createdTime = createdAt.toLocaleTimeString('en-US')
            return (
                
                  <Col md={4} xs={12} > <img src={post[0].image} alt="post image"/></Col>

            )
        })
    }

    return (
    <div>
    <div id="header">
    <div className="nameAndProfile">
                <img className="userFeedProfilePic" src={profileImage} alt="user"/>
                <span className="userFeedName userName">{userName}</span>
                </div>
              <hr/>
    <Container style={{padding: "20px 0px 0px 0px"}}>
<Row>
    {postMapper()}
</Row>
    </Container>
    </div>
    </div>
    )};

export default UserFeed;
