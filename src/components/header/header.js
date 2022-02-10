import styled from "styled-components";


export const Header = styled.div`
    width: 100vw;
    height: 15vh;
    position: absolute;
    height: 100%;
    top: 0px;
    .content {
        position: sticky;
        top: 0px;
        display: flex;
        justify-content: space-between;
        background-color: transparent;
        img{
            margin-left: 40px;
            width: 120px;
            height: 80px;
        }
        .links{
            display: flex;
            span{
                font-size: 15px;
                margin-right: 30px;
                color: white;
                :hover{
                    transition: 1.5s;
                    color: rgb(4,55,75);
                }
            }
        }

    }
`;