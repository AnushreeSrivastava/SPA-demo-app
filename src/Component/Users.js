import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { StyledLi, P, Span, StyledSpan } from '../assests/styles/user';

const Users = () => {
    const [users, setUsers] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then((data) => {
                let resData = data.slice(0, 10);
                setUsers(resData);
            })
            .catch(err => console.log(err));
    }, []);

    const handleClick = (id) => {

        let url = "/todos?userId=" + id;
        history.push(url);
    }

    return (
        <div id="container">
            <ul>
                {users.map(user =>
                    <StyledLi key={user.id} onClick={() => handleClick(user.id)}>
                        <P><Span>Name: </Span>{user.name}</P>
                        <P><Span>Email: </Span>{user.email}</P>
                        <P>
                            <Span>Address: </Span>
                            {user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}
                            <StyledSpan>Click to view todos</StyledSpan>
                        </P>

                    </StyledLi>)}
            </ul>
        </div>
    )
}

export default Users
