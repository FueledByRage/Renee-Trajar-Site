import styled from "styled-components";


export const ReviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 60%;
    background-color: yellow;
    width: 100vw;
    padding: 40px;
    .reviewBox{

        display: flex;
        width: 60%;
        img{
            width:170px;
            height: 300px;
            border: 10px solid white;
            transform: rotate(20deg);
        }
    }
`;