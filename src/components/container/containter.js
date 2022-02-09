import styled from "styled-components";


export const Container = styled.div`
    height: 85vh;
    width: 100vw;
    background-color: ${props => props.background};
    padding: ${props => props.padding};
    display: ${props => props.display};
`;