import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns:  repeat(2, minmax(100px,1fr));
    align-items: center;
    justify-items: center;
    grid-gap: 20px;
    background-color: #f5f5f5;

    @media screen and (max-width: 600px) {
      grid-template-columns:  1fr;
    }
`