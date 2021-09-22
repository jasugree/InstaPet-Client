import React, { useState, useEffect } from "react";
import { Container, FormGroup } from "reactstrap";
import PlaceholderImage from "../placeholder-post.jpg"

const Uploading = (props) => {
  const { setImage, image } = props;
  const [loading, setLoading] = useState(false);

  const UploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Jake-test");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/jgreene/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const File = await res.json();

    console.log(File.secure_url);
    setImage(File.secure_url);
    setLoading(false);
  };

  return (
    <div className="post-pic">
        <img id="post-pic" src={ image == "" ? (PlaceholderImage) :(image)} alt="" />
        <FormGroup id="uploader">
        <label for="profile-image-upload" class="custom-file-upload">
          <input
            style={{width: 1, height: 1,}}
            id="profile-image-upload"
            type="file"
            name="file"
            placeholder="Upload Image Here"
            onChange={UploadImage} 
            required="required"
          /> Add your Photo
          </label>
          {loading ? (
            <h5>Loading...</h5>
          ) : (
            null
          )}
        </FormGroup>
    </div>
  );
};

export default Uploading;
