import styled from 'styled-components'

export const TaskBtnClose = styled.button`
    outline: none;
    border: none;
    background: none;
    padding: 10px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    color: #f15025;
    transition: all 0.5s ease-in-out;
    width: 100%;
    display: grid;

    :hover {
       transform: translateY(-10px);
    }
`