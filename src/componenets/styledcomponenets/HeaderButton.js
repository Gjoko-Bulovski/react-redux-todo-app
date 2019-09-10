import styled, { css } from 'styled-components'
export const HeaderButton = styled.button`
    display: grid;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;

    :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

    ${props => props.btnFill && css`
    justify-self: start;
    `}
    ${props => props.btnAddTodo && css`
    justify-self: end;
    `}
`;

