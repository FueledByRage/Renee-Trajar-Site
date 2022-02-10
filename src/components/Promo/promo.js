import styled from "styled-components";


export const PromoDiv = styled.div`

    display: flex;
    width: 100%;
    img{
        height: 95%;
        width:300px;
        margin-left: 50px;
    }
    .promo-text{
        margin-left: 10%;
        width: 45%;
        height: 100%;
        h1{
            font-size: 40px;
        }
        .promo-body{
            margin-top: -20px;
            display: flex;
            flex-direction: column;
            align-content: space-between;
            button{
                margin-top:50px;
            }
        }
        p{
            margin-top: 5px;
            font-size: 20px;
            color: white;
        }

    }
`;