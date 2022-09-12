import React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "@emotion/styled";

const NavLinks = styled(BaseNavLink)`
  background: #fb6b03;
  color: white;
  padding: 8px 13px;
  border-radius: 10px;
  border: none;
  outline: none;

  &:hover {
    color: white;
  }
`;

const Notes = () => {
  return (
    <>
      <div>
        <NavLinks to="/notes/add">Create Notes</NavLinks>
      </div>
    </>
  );
};

export default Notes;
