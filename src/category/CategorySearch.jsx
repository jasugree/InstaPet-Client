import React, { useState, useEffect } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import "../App.css";

const CategorySearch = (props) => {
  const [category, setCategory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Testing, testing. 1, 2, 3.");

    fetch("http:localhost:3001/post/:category", {
      method: "POST",
      body: JSON.stringify({
        post: {
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
        setCategory("");
        CategorySearch();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <InputGroup
        className=".z-depth-1-half mx-auto"
        style={{ display: "flex", borderRadius: 6, width: 300 }}
      >
        <Input placeholder="Hashtag search" />
        <InputGroupAddon addonType="append">
          <InputGroupText onSubmit={handleSubmit}>Search</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default CategorySearch;
