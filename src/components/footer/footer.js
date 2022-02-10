import styled from "styled-components";



export const Footer = styled.div`
    height: 30vh;
    width: 100vw;
    border-top: 1px solid rgb(167,132,91);
    display: flex;
    justify-content: space-between;
    .logo-box{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-content: center;
        span{
            font-size: 12px;
            align-self: center;
            color: gray;
        }
        img{
            align-self: center;
            margin-top: 30px;
            height: 80px;
            width: 160px;
        }
    }
    .copy-box{
        width: 50%;
        display: flex;
        justify-content: center;
        span{
            margin-top: 15%;
            align-self: center;
            color: gray;
            font-size: 12px;
        }
    }
`;