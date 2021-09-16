import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, DropdownItem } from "reactstrap";

 const PostDelete = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deletePost = (posts) => {    
    fetch(`http://localhost:3001/post/delete/${props.post.id}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            'Authorization': props.token,
          })
        })
          .then(() => props.fetchPosts());
          toggle()
    }
    
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
