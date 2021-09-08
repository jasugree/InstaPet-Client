import React, { useState, useEffect } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


const PostCreate = () => {
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [likes, setLikes] = useState('');
    const [category, setCategory] = useState('');


    
    return (
        <div>
            Post Create Component
        </div>
    )
}

export default PostCreate;
