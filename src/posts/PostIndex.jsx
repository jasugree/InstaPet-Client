import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Sitebar from '../navbar/Navbar';
import Uploading from './Uploading';


const PostIndex = (props) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        fetch('https://localhost:3001/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json ())
        .then((logData) => {
            setPosts(logData)
        })
    }

    useEffect(() => {
        fetchPosts();
    }, [])
    
    return (
        <div>
            <Sitebar clickLogout={props.clearToken}/>
            <Uploading/>
            Hello, PostIndex.
            
        </div>
    )
}

export default PostIndex;
