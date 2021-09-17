import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  AWESOME_AARDVARK,
  COOL_CAT,
  DARLING_DOGGO,
  DELIGHTFUL_DOLPHIN,
  FANTASTIC_FROG,
  FIESTY_FOX,
  HAPPY_HEDGEHOG,
  LOVABLE_LLAMA,
  NIFTY_NARWHAL,
  PERFECT_PARROT,
  PRETTY_PENGUIN,
  PURPOSEFUL_PORPOISE,
  ROCKIN_RABBIT,
  SASSY_SLOTH,
  SILLY_SHARK,
  SLIPPERY_SNAKE,
  SUPER_SEAL,
  TUBULAR_TURTLE,
  ZESTY_ZEBRA,
} from "./category.constants";

const Search = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleFetch = (category) => {
    fetch(`http://localhost:3001/post/${category}`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setPosts(data);
      });
  };

  return (
    <div className="search-dropdown">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle id="search-button" caret>Search by Category</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handleFetch(AWESOME_AARDVARK)}>
            {AWESOME_AARDVARK}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(COOL_CAT)}>
            {COOL_CAT}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(DARLING_DOGGO)}>
            {DARLING_DOGGO}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(DELIGHTFUL_DOLPHIN)}>
            {DELIGHTFUL_DOLPHIN}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(FANTASTIC_FROG)}>
            {FANTASTIC_FROG}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(FIESTY_FOX)}>
            {FIESTY_FOX}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(HAPPY_HEDGEHOG)}>
            {HAPPY_HEDGEHOG}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(LOVABLE_LLAMA)}>
            {LOVABLE_LLAMA}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(NIFTY_NARWHAL)}>
            {NIFTY_NARWHAL}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(PERFECT_PARROT)}>
            {PERFECT_PARROT}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(PRETTY_PENGUIN)}>
            {PRETTY_PENGUIN}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(PURPOSEFUL_PORPOISE)}>
            {PURPOSEFUL_PORPOISE}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(ROCKIN_RABBIT)}>
            {ROCKIN_RABBIT}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(SASSY_SLOTH)}>
            {SASSY_SLOTH}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(SILLY_SHARK)}>
            {SILLY_SHARK}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(SLIPPERY_SNAKE)}>
            {SLIPPERY_SNAKE}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(SUPER_SEAL)}>
            {SUPER_SEAL}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(TUBULAR_TURTLE)}>
            {TUBULAR_TURTLE}
          </DropdownItem>
          <DropdownItem onClick={() => handleFetch(ZESTY_ZEBRA)}>
            {ZESTY_ZEBRA}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Search;
