import React, { useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
<<<<<<< HEAD

const profileImage = localStorage.getItem('profileImage');
const userName = localStorage.getItem('userName');

=======
const profileImage = localStorage.getItem('profileImage');
const userName = localStorage.getItem('userName');
>>>>>>> 761604faf52928c40d70abc439d94c34048f679f
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
                
<<<<<<< HEAD
                  <Col xs={4}> <img src={post[0].image} alt="post image"/></Col>

            )
        })
    }

=======
                  <Col> <img src={post[0].image} alt="post image"/></Col>
                  
                  
                 
 
            )
        })
    }
>>>>>>> 761604faf52928c40d70abc439d94c34048f679f
    return (
    <div>
    <div id="header">
    <div className="nameAndProfile">
<<<<<<< HEAD
                <img className="userFeedProfilePic" src={profileImage} alt="user"/>
                <span className="userFeedName userName">{userName}</span>
                </div>
              <hr/>
    <Container style={{paddingTop: 20}}>
=======
                <img className="userProfilePic" src={profileImage} alt="user"/>
                <span className="userName">{userName}</span>
                </div>
                <div></div>
    <Container>
>>>>>>> 761604faf52928c40d70abc439d94c34048f679f
<Row>
    {postMapper()}
</Row>
    </Container>
    </div>
    </div>
    )};
<<<<<<< HEAD

export default UserFeed;
=======
export default UserFeed;
>>>>>>> 761604faf52928c40d70abc439d94c34048f679f
