import styled from "styled-components";



export const StyledImage = styled.div`
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center top;
    background-size:125%;
    transition: 2s ease all;
    :hover{
        background-size:100%;
    }
`;