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
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [likes, setLikes] = useState("");
    const [category, setCategory] = useState("");
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Test, test");
    
        fetch("http://localhost:3001/post/delete", {
          method: "DELETE",
          body: JSON.stringify({
            post: {
              image,
              description,
              likes,
              category,
            },
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: props.token,
          }),
        })
          .then((res) => res.json())
          .then((logData) => {
            console.log(logData);
            setImage("");
            setDescription("");
            setCategory("");
            
          })
          .catch((error) => {
            console.log("Error", error);
          });
      };
    return (
        <div>
        <Button color="danger" onClick={toggle}>
        Delete Your Post
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Update Your Post</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Uploading setImage={setImage} image={image} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="likes">Likes</Label>
              <Input
                name="likes"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <Input
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormGroup>
            <Button type="post"></Button>
          </Form>
        </ModalBody>
      </Modal>
        </div>
    )
}

export default PostUpdate