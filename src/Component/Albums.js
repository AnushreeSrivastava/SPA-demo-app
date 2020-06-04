import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const StyledLi = styled.li`
list-style : none;
padding:10px;
margin:5px;
background-color: #1d1da036;
font-size: 16px;
font-weight: bold;
width: 90%;

&:hover{
    background-color: #21219685;
}
`;

const StyledSpan = styled.span`
font-size: 14px;
color:#0008ff;
float:right;
`;

const Albums = () => {
    const [albums, setAlbum] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(result => result.json())
            .then((data) => {
                let resData = data.slice(0, 10);
                setAlbum(resData);
            })
            .catch(err => console.log(err));
    }, []);

    const handleClick = (id) => {
        console.log(id);
        let url = "/photos?albumId=" + id;
        history.push(url);
    }

    return (
        <div id="container">
            <ul>
                {albums.map(album =>
                    <StyledLi key={album.id} onClick={() => handleClick(album.id)}>
                        {album.title}
                        <StyledSpan> Click to view photos</StyledSpan>
                    </StyledLi>)}
            </ul>
        </div>
    )
}

export default Albums
