import React, { useReducer } from 'react';

const PostFeed = (props) => {
    console.log(props.users);
    console.log(props.posts);
    const postMapper = () => {
        console.log('ignore');
        return props.posts.slice(0).reverse().map((post, index) =>{
            return(
                <div>
                <tr key={index}>
                    <div className="postContainer" style={{textAlign: 'left'}}>
                        <div className="userHeader">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="user" style={{width: 50}} />
                            <span>trash</span>
                        </div>
                        <div className="picture">
                            <img src={post.image} alt="fox" style={{width: 200}} />
                        </div>
                    </div>
                <div className="postDetails">
                    <div className="timeLike">
                        <div className="time">
                            {post.createdAt}
                        </div>
                        <div className="likes">
                            {post.likes}
                        </div>
                    </div>
                    <div className="description">
                        {post.description}
                    </div>
                    <div className="category">
                        {post.category}
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