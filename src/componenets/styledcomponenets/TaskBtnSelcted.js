import styled from 'styled-components'

export const TaskBtnSelected = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    padding: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`