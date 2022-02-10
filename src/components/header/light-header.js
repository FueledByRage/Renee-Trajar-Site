import styled from "styled-components";


export const LightHeader = styled.div`
    width: 100%;
    height: 10vh;
    background-color: white;
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 9999;
    box-shadow: 0px 1px 10px gray;
    img{
        margin-left: 40px;
        width: 110px;
        height: 60px;
    }
    .links{
        display: flex;
        justify-content: center;
        span{
            align-self: center;
            font-size: 15px;
            margin-right: 25px;
            color: gray;
            :hover{
                transition: 1.5s;
                color: rgb(4,55,75);
            }
        }
    }
`;