import styled from "styled-components";



export const CircleAvatar = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center top;
    border-radius: 100px;
    align-self: center;
`;
