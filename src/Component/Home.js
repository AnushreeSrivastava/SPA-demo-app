import React from 'react';
import styled from 'styled-components'


const DIV = styled.div`
top:50%;
left:35%;
position:absolute;
text-align:center;
margin: -25px 0 0 -31px;
`;
const H1 = styled.h1`
justify-content: center;
font-weight: 100;
font-size: 7rem;
margin: 2rem 0;
letter-spacing: -1px;
text-shadow: 0px 4px 0 rgba(18,86,136,0.11);
margin:auto;
line-height:50px;
vertical-align:middle;
font-family: 'Gloria Hallelujah', cursive;
color:#6d34a0;
`;

function Home() {
    return (
        <DIV>
            <H1 className="header-h1">SPA DEMO</H1>
        </DIV>
    )
}

export default Home;
