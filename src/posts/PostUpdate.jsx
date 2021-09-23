import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Modal,
  FormGroup,
  Label,
  Input,
  ModalBody,
  ModalHeader
} from "reactstrap";
import APIRUL from "../helpers/enviornments.js";
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

const PostUpdate = (props) => {
  const [editImage, setEditImage] = useState(props.post.image);
  const [editDesc, setEditDesc] = useState(props.post.description);
  const [editCat, setEditCat] = useState(props.post.category);
  const [editLike, setEditLike] = useState(props.post.like);
  const [modal, setModal] = useState(props.modal);
//  const {modal, setModal} = props
  const toggle = () => {
    setModal(!modal);
  }
  useEffect(() =>{
    setEditDesc(props.post.description)
    setEditCat(props.post.category)
    setEditImage(props.post.image)
  },[props.post])

  const postUpdate = (e, post) => {
    e.preventDefault();

    fetch(`${APIRUL}/post/update/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        post: {
          image: editImage,
          description: editDesc,
          category: editCat,
          likes: editLike,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        props.fetchMine();
        props.fetchPosts();
        setEditDesc("");
        setEditCat("");
        setEditLike(editLike);
        toggle();
        // props.setPosts(logData);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Something went wrong. Please try again.")
        return        
      });
  };
  return (
    <div>
        <Button style={{color: "#0086c3", backgroundColor: "transparent", border: 0, fontSize: 24, padding: 0}} size="sm" onClick={toggle}>
        <i className="far fa-edit"></i>
        </Button>
      <Modal centered isOpen={modal}>
        <ModalHeader toggle={toggle}>Update Your Post</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => postUpdate(e, props.post)}>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                type="textarea"
                rows="5"
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <Input
                type="select"
                name="category"
                value={editCat}
                required
                onChange={(e) => setEditCat(e.target.value)}
              >
                <option value="" disabled defaultValue>Select a Category</option>
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

            <Button id="update-button" style={{color: 'white', backgroundColor: '#0086c3'}} type="submit">Update</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PostUpdate;
