import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { StyledLi, StyledH1 } from '../assests/styles/post';

const Posts = () => {
    const [posts, setPost] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(result => result.json())
            .then((data) => {
                let resData = data.slice(0, 10);
                setPost(resData);
                console.log(resData);
            })
            .catch(err => console.log(err));
    }, []);

    const handleClick = (id) => {
        console.log(id);
        let url = "/comments?postId=" + id;
        history.push(url);
    }

    return (
        <div id="container">
            <StyledH1>Posts</StyledH1>
            <ul>
                {posts.map(post => <StyledLi key={post.id} onClick={() => handleClick(post.id)}>{post.title}</StyledLi>)}
            </ul>
        </div>
    )
}

export default Posts
