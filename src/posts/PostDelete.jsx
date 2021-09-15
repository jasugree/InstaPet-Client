import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const PostDelete = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const deletePost = (posts) => {
    fetch(`http://localhost:3001/post/${posts.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchPosts());
  };

  return (
    <div>
      <Button color="" size="sm" onClick={toggle}>
        Delete Your Post
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Delete Your Post</ModalHeader>
        <ModalBody>
          <Button onClick={deletePost}>Delete</Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PostDelete;
