import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
color:black;
list-style : none;
padding:10px;
margin:5px;
background-color: #179ccaad;
font-size: 16px;
font-weight: bold;
width: 120px;
display: inline-block;
text-decoration: none;

&.active {
    color: #3b0fec;
  }

`;

const NavBar = () => {
    return (

        <ul className="formatLinks">
            <StyledLink exact to="/">Home</StyledLink>
            <StyledLink exact to="/posts">Posts</StyledLink>
            <StyledLink exact to="/comments">Comments</StyledLink>
            <StyledLink exact to="/albums">Albums</StyledLink>
            {/* <StyledLink exact to="/photos">Photos</StyledLink> */}
            <StyledLink exact to="/users">Users</StyledLink>
            <StyledLink exact to="/todos">Todos</StyledLink>

        </ul>
    );
}

export default NavBar;


