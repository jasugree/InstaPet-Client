import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css";
import { CgSearch } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useClickOutside } from "react-click-outside-hook";

const CategorySearchContainer = styled(motion.div)`
  width: 15rem;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.25);
  ${
    "" /* justify-content: center;
  overflow: hidden; */
  }
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  color: rgba(18, 17, 46, 1);
  font-weight: 500;
  background-color: transparent;
  border-radius: 6px;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 23px;
  margin-right: 10px;
  vertical-align: middle;
  margin-bottom: 4px;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 16px;
  vertical-align: middle;
  margin-bottom: 3px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

const containerVariants = {
  expanded: {
    height: "18em",
  },
  collapsed: {
    height: "2.5em",
  },
};

const containerAnimation = { type: "spring", damping: 22, stiffness: 150 };

const CategorySearch = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isClickedOutside] = useClickOutside();
  const inputRef = useRef();

  const expandContainer = () => {
    setIsExpanded(true);
  };

  const collapseContainer = () => {
    setIsExpanded(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  return (
    <CategorySearchContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      transition={containerAnimation}
      ref={ref}
    >
      <SearchInputContainer>
        <SearchIcon>
          <CgSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Search by Category"
          onFocus={expandContainer}
          ref={inputRef}
        />
        <CloseIcon onClick={collapseContainer}>
          <VscChromeClose />
        </CloseIcon>
      </SearchInputContainer>
    </CategorySearchContainer>
  );
};

export default CategorySearch;
