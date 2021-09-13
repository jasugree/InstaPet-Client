import React, { useState, useEffect } from "react";
import "../App.css";

const Search = (props) => {
  const [category, setCategory] = [];
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //   useEffect(() => {
  //   fetch("http:localhost:3001/post/:category", {
  //     method: "GET",
  //       body: JSON.stringify({
  //     post: {
  //       category,
  //     },
  //       }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: props.token,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setCategory(data));
  //   setCategory("");
  //     .then((logData) => {
  //       console.log(logData);
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  //   }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/post/category")
  //       .then((res) => res.json())
  //       .then((data) => Search(data));
  //   }, []);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = category.filter((category) => {
        const regex = new RegExp(`${text}`, "gi");
        return category.match(regex);
      });
    }
    console.log(matches);
    setSuggestions("matches", matches);
    setText(text);
  };

  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
        className="input"
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
      />
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div key={i} onClick={() => onSuggestHandler(suggestion.category)}>
            {suggestions.category}
          </div>
        ))}
    </div>
  );
};

export default Search;
