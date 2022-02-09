import styled from "styled-components";


export const StyledButton = styled.button`
    width: 100px;
    background: ${props => props.background};
    color:  ${props => props.color};
    border: ${props => props.border};
    padding: 15px;
    width: 300px;
    :hover{
        background-color:  ${props => props.onHoverBackground};
        color:  ${props => props.onHoverColor};
        border: ${props => props.onHoverBorder};
    } 
`;