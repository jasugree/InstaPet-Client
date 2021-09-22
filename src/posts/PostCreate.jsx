import React, { useState } from "react";
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
import Uploading from "./Uploading";
import {
  AWESOME_AARDVARK,
  COOL_CAT,
  DARLING_DOGGO,
  DELIGHTFUL_DOLPHIN,
  FANTASTIC_FROG,
  FIESTY_FOX,
  HAPPY_HEDGEHOG,
  LOVABLE_LLAMA,
  NIFTY_NARWHAL,
  PERFECT_PARROT,
  PRETTY_PENGUIN,
  PURPOSEFUL_PORPOISE,
  ROCKIN_RABBIT,
  SASSY_SLOTH,
  SILLY_SHARK,
  SLIPPERY_SNAKE,
  SUPER_SEAL,
  TUBULAR_TURTLE,
  ZESTY_ZEBRA,
} from "./category.constants.js";
import APIRUL from "../helpers/enviornments";

const PostCreate = (props) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState(0);
  const [category, setCategory] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Testing, testing. 1, 2, 3.");

    fetch(`${APIRUL}/post/create`, {
      method: "POST",
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
        setLikes(likes);

        props.fetchPosts();
        props.fetchMine();
        toggle();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <Button
        className="nav-button"
        onClick={toggle}
        color="primary"
        style={{
          color: "#0086c3",
          backgroundColor: "#ffffff",
          border: "none",
          fontSize: "2em",
        }}
      >
        <i className="fas fa-plus-square"></i>
      </Button>

      <Modal centered isOpen={modal}>
        <ModalHeader toggle={toggle}>Share Your Pet</ModalHeader>
        <ModalBody className="create-modal">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Uploading setImage={setImage} image={image} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                type="textarea"
                rows="5"
                placeholder="Add a description to your post..."
                name="description"
                value={description}
                required
                
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <Input
                type="select"
                name="category"
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled selected>Select a Category</option>
                <option>{AWESOME_AARDVARK}</option>
                <option>{COOL_CAT}</option>
                <option>{DARLING_DOGGO}</option>
                <option>{DELIGHTFUL_DOLPHIN}</option>
                <option>{FANTASTIC_FROG}</option>
                <option>{FIESTY_FOX}</option>
                <option>{HAPPY_HEDGEHOG}</option>
                <option>{LOVABLE_LLAMA}</option>
                <option>{NIFTY_NARWHAL}</option>
                <option>{PERFECT_PARROT}</option>
                <option>{PRETTY_PENGUIN}</option>
                <option>{PURPOSEFUL_PORPOISE}</option>
                <option>{ROCKIN_RABBIT}</option>
                <option>{SASSY_SLOTH}</option>
                <option>{SILLY_SHARK}</option>
                <option>{SLIPPERY_SNAKE}</option>
                <option>{SUPER_SEAL}</option>
                <option>{TUBULAR_TURTLE}</option>
                <option>{ZESTY_ZEBRA}</option>
              </Input>
            </FormGroup>
            <Button id="create-button"
              type="post"
            >
              Post
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PostCreate;
