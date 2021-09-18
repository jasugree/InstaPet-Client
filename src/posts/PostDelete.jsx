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
          .then(() =>{ 
          props.fetchPosts();
          props.fetchMine();
          toggle();
          });
    }
    
    return (
        <div>
        <Button style={{backgroundColor: "transparent", border: 0, fontSize: 24, padding: 0}} size="sm" onClick={toggle}>
        <i class="far fa-trash-alt"></i>
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
