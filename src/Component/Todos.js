import React, { useEffect, useState } from 'react';
import { StyledCheck, Span, StyledH1, StyledLi, WrapperDiv } from '../assests/styles/todos';


const Todos = (props) => {
    const [todos, setTodos] = useState([]);
    const params = props.location.search;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos${params}`)
            .then(result => result.json())
            .then((data) => {
                let resData = data.splice(0, 10);
                setTodos(resData);
                console.log(resData);

            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <StyledH1>Todos</StyledH1>
            <WrapperDiv>
                {todos.map(todo => {
                    return (
                        <div>
                            <StyledLi key={todo.id}> <StyledCheck type="checkbox" checked={todo.completed} />{todo.title}</StyledLi>
                        </div>
                    );
                }
                )}
            </WrapperDiv>
        </div >
    )
}

export default Todos;