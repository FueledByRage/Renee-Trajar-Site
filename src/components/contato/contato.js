import styled from "styled-components";

export const ContatoTitulo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 15%;
    color: rgb(1,69,97);
    text-align: center;
    h2:hover{
        .invisible-div{
            border-top: 2px solid rgb(4,54,75);
            
        }
    }
    .invisible-div{
        margin-top: -25px;
        align-self: center;
        width: 45px;
        border-bottom: 1px solid rgb(4,54,75);
        height: 10px;
        :hover{
            transition: 1s;
            transform: scaleX(3);
        }
    }
`;

export const Contato = styled.div`
    width: 35%;
    height: 80vh;
    p, button{
        margin-left: 100px;
    }
    p:nth-child(odd){
        color: rgb(1,69,97);
        font-size: 18px;

    }
    p:nth-child(even){
        margin-top: -10px;
        color: gainsboro;
    }
    span{
        color: rgb(1,69,97);
    }
    button{
        margin-top: 60px;
    }
`;

export const FormularioContato = styled.div`
    padding: 0px 40px;
    button{
        width: 76%;
        margin-top: 30px;
    }
    margin-left:30px;
    width: 100%;
    label{
        position: absolute;
        left: 480px;
        font-size: 10px;
        color: gray;
    }
    input{
        margin-top: 20px;
        border: 1px solid rgb(1,69,97);
        width: 75%;
        height: 35px;
    }
    .nome{
        :focus ~label.nome{
            transform: translate(0, -25px) scale(.9);
            color: rgb(1,69,97);
        }
    }
    .email{
        :focus ~label.email{
            transform: translate(0, -25px) scale(.9);
            color: rgb(1,69,97);
        }
    }
    textarea{
        margin-top: 20px;
        width: 75%;
        height: 80px;
        :focus ~label.mensagem{
            transform: translate(0, -25px) scale(.9);
            color: rgb(1,69,97);
        }
    }
    .nome{
        top: 4940px;
    }
    .email{
        top: 4995px;
    }
    .mensagem{
        top: 5050px;
    }
`;