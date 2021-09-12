<<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// // import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
// import "../App.css";
// import { useCombobox } from "downshift";
// import { Input } from "antd";

// const Search = (props) => {
//   const [inputItems, setInputItems] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [singleCategory, setSingleCategory] = useState("");

//   useEffect(() => {
//     fetch("http:localhost:3001/post/:category", {
//       method: "GET",
//       //   body: JSON.stringify({
//       post: {
//         category,
//       },
//       //   }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => setCategory(data));
//     setCategory("");
//     //   .then((logData) => {
//     //     console.log(logData);
//     //   })
//     //   .catch((error) => {
//     //     console.log("Error", error);
//     //   });
//   }, []);

//   console.log(category);

//   console.log(props.token + "Search, line 36");

//   const {
//     isOpen,
//     getMenuProps,
//     getInputProps,
//     getComboboxProps,
//     highlightedIndex,
//     getItemProps,
//   } = useCombobox({
//     items: inputItems,
//     onInputValueChange: ({ inputValue }) => {
//       setInputItems(
//         category.filter((item) =>
//           item.category.toLowerCase().startsWith(inputValue.toLowerCase())
//         )
//       );
//     },
//   });

//   return (
//     <div>
//       <h2>Current Category: {singleCategory}</h2>
//       <div {...getComboboxProps()}>
//         <Input
//           {...getInputProps()}
//           placeholder="Search Categories"
//           enterButton="Search"
//           size="medium"
//         />
//       </div>
//       <ul {...getMenuProps()}>
//         {isOpen &&
//           inputItems.map((item, index) => (
//             <span
//               key={item.id}
//               {...getItemProps({ item, index })}
//               onClick={() => setSingleCategory(item.category)}
//             >
//               <li
//                 style={highlightedIndex === index ? { background: "#ede" } : {}}
//               >
//                 <h4>{item.category}</h4>
//               </li>
//             </span>
//           ))}
//       </ul>
//     </div>
//   );
// };

// // <InputGroup
// //   className=".z-depth-1-half mx-auto"
// //   style={{ display: "flex", borderRadius: 6, width: 290 }}
// // >
// //   <Input placeholder="Category Search" />
// //   <InputGroupAddon addonType="append">
// //     <Button onSubmit={handleSubmit} style={{ height: 38 }}>
// //       Search
// //     </Button>
// //   </InputGroupAddon>
// // </InputGroup>
// //   );
// // };

// export default Search;
=======
import React, { useState, useEffect } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import "../App.css";

const Search = (props) => {
  const [category, setCategory] = useState("");

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
        Search();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <InputGroup
      className=".z-depth-1-half mx-auto"
      style={{ display: "flex", borderRadius: 6, width: 300 }}
    >
      <Input placeholder="Hashtag search" />
      <InputGroupAddon addonType="append">
        <InputGroupText>Search</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
>>>>>>> parent of 26fa927 (restarted Search.jsx code. Needs debugging.)
