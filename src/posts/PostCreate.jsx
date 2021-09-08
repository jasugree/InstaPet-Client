import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const PostCreate = (props) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    setError("");
  }, [image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Testing, testing. 1, 2, 3.");

    fetch("https://localhost:3001/create", {
      method: "POST",
      body: JSON.stringify({
        image: image,
        description: description,
        likes: likes,
        category: category,
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
        setLikes("");
        setCategory("");
        // props.fetchPostEntry();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        {/* <Modal isOpen={true}> */}
        <ModalHeader toggle={toggle}>Post Your Pet</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="image">Photo</Label>
              <Input
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
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
              <Label htmlFor="likes" />
              <Input
                name="likes"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category" />
              <Input
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormGroup>
            <Button type="post">Post</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PostCreate;
