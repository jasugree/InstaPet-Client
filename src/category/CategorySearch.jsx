import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";

const CategorySearchContainer = styled.div`
  width: 15rem;
  height: 1.75rem;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.25);
  justify-content: center;
  overflow: hidden;
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

const CategorySearch = (props) => {
  return (
    <CategorySearchContainer>
      <SearchInputContainer>
        <SearchInput placeholder="Search by Category"></SearchInput>
      </SearchInputContainer>
    </CategorySearchContainer>
  );
};

export default CategorySearch;
