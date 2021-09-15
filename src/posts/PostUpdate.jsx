import React, {useState} from 'react';
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
    const [editImage, setEditImage] = useState(props.postToUpdate);
    const [editDesc, setEditDesc] = useState(props.postToUpdate);
    const [editCat, setEditCat] = useState(props.postToUpdate);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    console.log(props.postToUpdate.id)
    console.log(props.posts.id)
    console.log('hello!!')

    const postUpdate = (e, post) => {
        e.preventDefault();
        console.log("Test, test");
    
        fetch(`http://localhost:3001/post/${props.postToUpdate.id}`, {
          method: "PUT",
          body: JSON.stringify({
            post: {
              description:editDesc,
              category:editCat,
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
            setEditImage("");
            setEditDesc("");
            setEditCat("");
            
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
