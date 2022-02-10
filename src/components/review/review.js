import styled from "styled-components";


export const ReviewDiv = styled.div`
    display: flex;
    height: 60%;
    background-color: rgb(239,247,249);
    width: 100vw;
    padding: 40px;
    .reviewBox{
        display: flex;
        flex-direction: column;
        text-align: center; 
        width: 60%;
        h3{
            color: rgb(1,69,97);
        }
        h4{
            color: rgb(167,132,91);
        }
    }
    img{
        width:170px;
        height: 300px;
        border: 10px solid white;
        transform: rotate(20deg);
    }
`;