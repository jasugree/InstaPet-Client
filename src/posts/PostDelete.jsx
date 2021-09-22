import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import APIRUL from "../helpers/enviornments";

const PostDelete = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const deletePost = (posts) => {
    fetch(`${APIRUL}/post/delete/${props.post.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => {
      props.fetchPosts();
      props.fetchMine();
      toggle();
    });
  };

  return (
    <div>
      <Button
        style={{
          color: "#0086c3",
          backgroundColor: "transparent",
          border: 0,
          fontSize: 24,
          padding: 0,
        }}
        size="sm"
        onClick={toggle}
      >
        <i className="far fa-trash-alt"></i>
      </Button>
      <Modal centered isOpen={modal}>
        <ModalHeader toggle={toggle}>Are you sure you want to delete this post?</ModalHeader>
        <ModalBody>
          <Button id="delete-button"
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
              backgroundColor: "#0086c3",
              borderRadius: 100,
              fontWeight: "bold",
              border: "none",
              width: "100%"
            }}
            onClick={deletePost} 
          >
            Delete
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PostDelete;
