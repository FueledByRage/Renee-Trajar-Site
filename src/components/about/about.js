import styled from "styled-components";

export const AboutDiv = styled.div`
    margin-left: 70px;
    display: flex;
    img{
        margin-left: 0px;
        width: 380px;
        height: 85%;
    }
    .about-text{
        padding: 0px 0px 0px 9%;
        width: 55%;
        display: flex;
        flex-direction: column;
        .invisible-div{
            height:10px;
            margin-left:45px;
            margin-top: -25px;
            width: 80px;
            border-bottom: 1px solid rgb(1,69,97);
            :hover{
                transition: 1s;
                transform: scale(4.5, 1);
            }
        }
        .title{
            color: rgb(1,69,97);
            font-size: 30px;
        }
        p{
            color: rgb(138,138,138);
        }
        .quote{
            color: #40E0D0;
        }
        .footer{
            align-self: end;
            margin-right: 10px;
        }
    }
`;

