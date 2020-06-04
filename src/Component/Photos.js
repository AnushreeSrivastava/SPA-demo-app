import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
height:200px;
width:200px;
`;

const StyledH1 = styled.h1`
margin-left: 40px;
`;


const Photos = (props) => {
    const [photos, setphotos] = useState([]);
    const params = props.location.search;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos${params}`)
            .then(result => result.json())
            .then((data) => {
                let resData = data.splice(0, 10);
                setphotos(resData);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <StyledH1>Photos</StyledH1>
            {photos.map(photo => <StyledImg key={photo.id} src={photo.url}></StyledImg>)}
        </div>
    )
}

export default Photos;
