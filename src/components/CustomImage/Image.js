import styled from "styled-components";



export const StyledImage = styled.div`
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center top;
    :hover{
        opacity: .5
    }
`;