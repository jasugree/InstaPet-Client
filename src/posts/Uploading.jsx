import React, { useState, useEffect } from "react";
import { Container, FormGroup } from "reactstrap";

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
    <div>
      <Container>
        <h1>Upload Your Picture</h1>
        <FormGroup>
          <input
            required
            type="file"
            name="file"
            placeholder="Upload Image Here"
            onChange={UploadImage}
          />
          <br />
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <img src={image} style={{ width: "300px" }} />
          )}
        </FormGroup>
      </Container>
    </div>
  );
};

export default Uploading;
