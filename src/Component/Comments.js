import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
position:relative;
list-style : none;
padding:10px;
margin:20px;
background-color: #2f2fd854;
font-size: 16px;
font-weight: bold;
width: 44%;
float:left;
border-radius: 20px;

&::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    border: 30px solid transparent;
    border-top-color: #2f2fd854;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -30px;
}
`;

const StyledH1 = styled.h1`
margin-left: 40px;
`;

const Span = styled.span`
font-size:20px;
`;

const Comments = (props) => {
    const [comments, setcomments] = useState([]);
    const params = props.location.search;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments${params}`)
            .then(result => result.json())
            .then((data) => {
                let resData = data.splice(0, 10);
                setcomments(resData);
                console.log(resData);

            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <StyledH1>Comments</StyledH1>
            {comments.map(comment =>
                <StyledLi key={comment.id}>
                    <p><Span>Name: </Span>{comment.name}</p>
                    <p><Span>Email: </Span>{comment.email}</p>
                    <p><Span>Message: </Span>{comment.body}</p>
                </StyledLi>)}
        </div>
    )
}

export default Comments;
