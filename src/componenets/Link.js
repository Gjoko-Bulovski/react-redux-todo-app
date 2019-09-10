import React from 'react';
import styled from 'styled-components'


const Link = ({ text, onclick }) => {
    //styled componenets
    const LinkStyle = styled.button`
        color: #1212fd;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        outline: none;
        border: none;
        background: none;
        
        :hover {
            color: #1414df;
        }
    `;

    return (
        <LinkStyle onClick={onclick}>{text}</LinkStyle>
    );
}

export default Link;