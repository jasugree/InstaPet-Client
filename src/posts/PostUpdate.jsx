import React, {useContext, useEffect, useState} from 'react';
import { 
    Button,
    Form, 
    Modal, 
    FormGroup,
    Label,
    Input,
    ModalBody,
    ModalHeader,
 } from 'reactstrap';
 import Uploading from './Uploading';

const PostUpdate = (props) => {
    const [editImage, setEditImage] = useState(props.post.image);
    const [editDesc, setEditDesc] = useState(props.post.description);
    const [editCat, setEditCat] = useState(props.post.category);
    const [editLike, setEditLike] = useState(props.post.like)
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    
    console.log('hello!!')
    console.log(props.post)

    const postUpdate = (e, post) => {
        e.preventDefault();
        console.log("Test, test");
    
        fetch(`http://localhost:3001/post/update/${props.post.id}`, {
          method: "PUT",
          body: JSON.stringify({
            post: {
              image:editImage,
              description:editDesc,
              category:editCat,
              likes:editLike
            },
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            'Authorization': props.token,
          }),
        })
          .then((res) => res.json())
          .then((logData) => {
            console.log(logData);
            setEditDesc("");
            setEditCat("");
            setEditImage(editImage);
            setEditLike(editLike)
            toggle()
            props.fetchPosts()
          })
          .catch((error) => {
            console.log("Error", error);
          });
      };
    return (
        <div>
        <Button color="danger" size='sm' onClick={toggle}>
        Update Your Post
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Update Your Post</ModalHeader>
        <ModalBody>
          <Form onSubmit={postUpdate}>
            
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <Input
                name="category"
                value={editCat}
                onChange={(e) => setEditCat(e.target.value)}
              />
            </FormGroup>
            <Button type="submit">Update</Button>
          </Form>
        </ModalBody>
      </Modal>
        </div>
    )
}

export default PostUpdate
