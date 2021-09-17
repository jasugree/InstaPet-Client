import React, { useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";


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
        if (!props.users || !props.mine) return
        return joinArrays(props.users, props.mine).slice(0).reverse().map((post, index) => {

            const createdAt = new Date(post[0].createdAt);
            const createdDate = createdAt.toLocaleDateString('en-US');
            const createdTime = createdAt.toLocaleTimeString('en-US')

            return (
<div id="header">
    <div className="nameAndProfile">
                <img className="userProfilePic" src={post[1].profileImage} alt="user"/>
                <span className="userName">{post[1].userName}</span>
                </div>
                <div>
                <Container>
                    
                <Row>
                
                  <Col sm> <img src={post[0].image} alt="post image"/></Col>
                  <Col sm> <img src={post[0].image} alt="post image"/></Col>
                  <Col sm> <img src={post[0].image} alt="post image"/></Col>
                 
                </Row>
              </Container>  
              </div>
</div>



            )
        })
    }

    return <div>{postMapper()}</div>;
};

export default UserFeed;
