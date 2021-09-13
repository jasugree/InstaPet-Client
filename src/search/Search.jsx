// import { Input } from "antd";
import { Input } from "reactstrap";
import { useCombobox } from "downshift";
import React, { useState, useEffect } from "react";
import "../App.css";

const Search = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputCategories, setInputCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [singleCategory, setSingleCategory] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/post/`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories([...new Set(data.map((post) => post.category))]);

        //map() takes data and creates a new array with just the category of each post. new Set from that array eliminates duplicates. we are using 'setCategories' to store those values for the autocomplete. .
      });
  }, []);

  const handleFetch = () => {
    fetch(`http://localhost:3001/post/${inputValue}`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        /*
        Need to have data getting from fetch (array of posts). Make it so whenever I run fetch, the handleFetch, display all posts in feed., figure out how to pass down setPosts(feedData);Find lowest common parent, where they are at the root level, Post, set post.
        */
      });
  };

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputCategories,
    onInputValueChange: ({ inputValue }) => {
      console.log("Test, Line 53");
      if (inputValue.length >= 1) {
        setInputCategories(
          categories.filter((category) =>
            category.toLowerCase().startsWith(inputValue.toLowerCase())
          )
        );
      }
    },
  });

  console.log(props.token + "Search, line 40");

  return (
    <div className="Search">
      {/* <h4>{singleCategory}</h4> */}
      <div {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          placeholder="Search Categories"
          enterButton="Search"
          size="large"
        />
        {/* Put button here */}
      </div>
      <ul style={{ listStyle: "none" }} {...getMenuProps()}>
        {isOpen &&
          inputCategories.map((category, index) => (
            <span
              key={category.id}
              {...getItemProps({ category, index })}
              onClick={() => setSingleCategory(category)}
            >
              <li
                style={highlightedIndex === index ? { background: "#ede" } : {}}
              >
                <h6>{category}</h6>
              </li>
            </span>
          ))}
      </ul>
    </div>
  );
};
export default Search;
