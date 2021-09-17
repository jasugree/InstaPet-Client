import React, { useReducer, useState } from 'react';
import PostUpdate from './PostUpdate';

import PostDelete from './PostDelete';
import LikeButton from './LikeButton';
import {Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const PostFeed = (props) => {
    console.log(props.users);
    console.log(props.posts);
    console.log(props.token);

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

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
                            <span className="userName">{post[1].userName}</span>
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
                    <span className="userName-description">{post[1].userName}</span> {post[0].description}
                    </div>
                    <PostUpdate post={post[0]} token={props.token} fetchPosts={props.fetchPosts} fetchMine={props.fetchMine} />
                    <PostDelete post={post[0]} token={props.token} fetchPosts={props.fetchPosts} fetchMine={props.fetchMine} />
                    <div className="category">
                        {post[0].category}
                    </div>
                    
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle> ... </DropdownToggle>
                    <DropdownMenu> 
                     
                    <PostUpdate post={post[0]} token={props.token} fetchPosts={props.fetchPosts} /> 
                    
                    <DropdownItem>
                    <PostDelete post={post[0]} token={props.token} fetchPosts={props.fetchPosts} />
                    </DropdownItem>
                    </DropdownMenu>
                    </ButtonDropdown>

                    <div>
                    <LikeButton/>
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
