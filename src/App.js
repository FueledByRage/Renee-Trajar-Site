import { StyledButton } from "./components/button/button";
import { Container } from "./components/container/containter";
import { Header } from "./components/header/header";
import { MottoDiv } from "./components/motto/motto";
import photo from './assets/photo.png';
import placeholder from './assets/placeholder.png';
import { AboutDiv } from "./components/about/about";
import { ReviewDiv } from "./components/review/review";
import { Icons } from "./components/review/icons";
import { IconsDiv } from "./components/review/IconsDiv";
import { PromoDiv } from "./components/Promo/promo";
import { CustomImageBox } from "./components/CustomImage/CustomImage";
import { StyledImage } from "./components/CustomImage/Image";
import { ServicoBox } from "./components/Camisaria/Camisaria";
import { Carousel } from "./components/caroulsel/caroulsel";
import { Footer } from "./components/footer/footer";
import { Contato, ContatoTitulo, FormularioContato } from "./components/contato/contato";
import { ContatoContainer } from "./components/contato/contatoContainer";
import logoFooter from './assets/logo-footer.png';
import logoHeaderDark from './assets/logo-header-dark.png'
import { WhatsappButton } from "./components/whatsapp-button/button";
import { useEffect, useState } from "react";
import { LightHeader } from "./components/header/light-header";
import logoHeaderLight from './assets/logo-header.png';
import { FiChevronUp } from "react-icons/fi";
import './global.css'

function App() {

  const [ light, setLight ] = useState(false);
  const [ showBack, setBack ] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  });

  function handleScroll(){
    const position = window.pageYOffset;

    if(position == 500) setLight(true);
    else{
      if(position < 500 && light) setLight(false)
    }
    if(position >= 4700) setBack(true);
    else {
      if(showBack )setBack(false)
    }
  }

  return (
    <>
      {
        light ? 
        <LightHeader>
          <img alt='imagem' src={logoHeaderLight} alt='logo'/>
          <div className="links" >
              <span>EMPRESA </span>
              <span>CAMISARIA</span>
              <span>ALFAIATARIA</span>
              <span>DEPOIMENTOS</span>
              <span>CONTATO</span>
          </div>
        </LightHeader>:
      <Header>
        <div className="content" >
          <img alt='imagem' src={logoHeaderDark} alt='logo'/>
          <div className="links" >
            <span>EMPRESA </span>
            <span>CAMISARIA</span>
            <span>ALFAIATARIA</span>
            <span>DEPOIMENTOS</span>
            <span>CONTATO</span>
          </div>
        </div>
      </Header>
      }
      <Container id="top" background='rgb(8,9,11)' padding='20px 0px;'>
        <MottoDiv>
          <h2>
            Elegante ?? ter um
          </h2>
          <h1>
            ALFAIATE
          </h1>
          <h2>
            para chamar de seu.
          </h2>
          <h3>
            COMPRE HOJE, <b>PAGUE EM AT?? 3x COM 12% DE DESCONTO</b> E TENHA 10 MESES PARA CONFECCIONAR!
          </h3>
          <StyledButton background='#117799' color="white" onHoverBackground='transparent' 
          onHoverBorder= '1px solid rgb(190,150,103)'>
            FA??A J?? UM OR??AMENTO
          </StyledButton>
        </MottoDiv>

      </Container>
      <Container background='white' padding='60px 0px' display='flex'>
        <AboutDiv>
          <img alt='imagem' src={photo} alt='image'/>
          <div className="about-text" >
            <h2 className="title" >Renee Trajar</h2>
            <div className="invisible-div"/>
            <p>
              Com mais de 35 anos de experi??ncia em camisas, cal??as e ternos sob medida, 
              possu??mos profissionais experientes e altamente qualificados
            </p>
            <p>
              Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo atrav??s das medidas
              tiradas pelo pr??prio Sr.Renee no escritorio ou resid??ncia do cliente.
            </p>
            <p className="quote" >
              "Nosso objetivo ?? superar a expectativa do cliente proporcionando-lhe satisfa????o ao usar
              nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.
              "
            </p>
            <p className="footer">
              Renee Trajar
            </p>
            <StyledButton color="white" background='rgb(1,69,97)' onHoverBackground='rgb(4,55,75)'>
              Agende uma visita!
            </StyledButton>
          </div>
        </AboutDiv>
      </Container>
      <Container>
        <ReviewDiv>
          <div className="reviewBox">
            <h2>
              "Fa??o roupa com o Renee Trajar h?? mais de duas d??cadas, o servi??o ?? impecavel em todos os detalhes,
              desde a costura ao caimento. O Renee tem uma equipe de mestre!"
            </h2>
            <h3>Nelson Garey</h3>
            <h4>Advogado | Nelson Garey Advogados Associados</h4>
          </div>
          <img alt='imagem' className='principalImage' src={placeholder} alt='Imagem principal'/> 
        </ReviewDiv>
          <IconsDiv>
            <Icons>
              <img alt='imagem' src={placeholder}/>
              <span>Qualidade</span>
              <span>Camisaria e Alfaiataria 100% artesanal.</span>
            </Icons>
            <Icons>
              <img alt='imagem' src={placeholder}/>
              <span>Confian??a</span>
              <span>Atendimento personalizado no escritorio ou resid??ncia</span>
            </Icons>
            <Icons>
              <img alt='imagem' src={placeholder}/>
              <span>Experi??ncia</span>
              <span>Tradi????o e modernidade proporcionando a eleg??ncia</span>
            </Icons>
          </IconsDiv>
      </Container>
      <Container background='rgb(4,41,55)' padding=' 10px 20px' display='flex'>
        <PromoDiv>
          <div className="promo-text">
            <h1>CONDI????O IMPERD??VEL</h1>
            <div className="promo-body">
              <h2>Compre hoje e garanta: </h2>
              <p> - 12% de desconto e pagamento em at?? <b>3x sem juros;</b></p>
              <p> - At?? <b>10 meses</b> para confeccionar sua roupa. N??o se preocupe se <br/> 
              suas medidas aumentarem ou diminu??ram, estar?? sempre elegante;
              </p>
              <p> -  Condi????o muito especial por <b>tempo limitado;</b></p>
              <p> - Poder presentear algu??m com uma roupa de alta costura <b>exclusiva</b>.</p>

              <StyledButton color="white" background='rgb(190,150,103)' onHoverBackground='rgb(114,114,114)'>
                Garanta essa condi????o especial!
              </StyledButton>
            </div>
          </div>
          <img alt='imagem' src={placeholder} alt='Promo image'/>
        </PromoDiv>
      </Container>
      <Container display='flex' padding='140px 40px'>
        <CustomImageBox>
          <StyledImage background={placeholder}/>
        </CustomImageBox>
        <ServicoBox>
          <h1>Camisaria</h1>
          <h3>-CONFECCIONADAS ARTESANALMENTE</h3>
          <div className="lista" >
            <ul>
              <li>100% Algod??o</li>
              <li>Monograma</li>
              <li>Slim</li>
            </ul>
            <ul>
              <li>Nacionais e Importadas</li>
              <li>Tradicionais e Esportivas</li>
              <li>Casamentos</li>
            </ul>
          </div>
          <StyledButton background='rgb(1,69,97)' color="white" onHoverBackground='rgb(1,49,69)'>
            Quero um or??amento
          </StyledButton>
        </ServicoBox>
      </Container>
      <Container display='flex' padding='140px 40px'>
        <ServicoBox>
          <h1>Alfaiataria</h1>
          <h3>-Totalmente Feito a m??o e sob medida</h3>
          <div className="lista" >
            <ul>
              <li>Fio Super 120 e 130</li>
              <li>L?? fria Australiana</li>
              <li>Bot??es importados</li>
            </ul>
            <ul>
              <li>Ternos e Cal??as</li>
              <li>Palet??s e Smokings</li>
              <li>Sociais e Essportivos</li>
            </ul>
          </div>
          <StyledButton background='rgb(4,41,55)' color="white" onHoverBackground='rgb(1,49,69)'>
            Quero um or??amento
          </StyledButton>
        </ServicoBox>
        <CustomImageBox>
          <StyledImage background={placeholder}/>
        </CustomImageBox>
      </Container>
      <Container display='flex'>
        <Carousel />
      </Container>
      <Container padding='50px 0px'>
        <ContatoTitulo>
          <h2>Contato</h2>
          <div className='invisible-div'></div>
        </ContatoTitulo>
        <ContatoContainer>
          <Contato>
            <p>TELEFONES</p>
            <p>+55 (11) 3088-0757</p>
            <p>E-MAIL</p>
            <p>renee@reneetrajar.com.br</p>

            <p>ATENDIMENTO PERSONALIZADO</p>
            <StyledButton background='transparent' border='1px solid rgb(1,69,97)' 
            color='rgb(1,69,97)' 
            onHoverBorder='1px solid rgb(190,150,103) '
            onHoverColor='rgb(190,150,103)'
            >
              Clique aqui!
            </StyledButton>
          </Contato>
          <FormularioContato>
            <input 
              className="nome"
            />
            <label className="nome">Nome</label>
            <input 
              className="email"
            />
            <label className="email">E-mail</label>
            <textarea />
            <label className="mensagem">Mensagem</label>
            <StyledButton background='rgb(1,69,97)' color='white'>
              Enviar Mensagem
            </StyledButton>
          </FormularioContato>
        </ContatoContainer>
      </Container>
      {
        showBack && <a className="back-to-up" href="#top">
          <FiChevronUp />
        </a>
      }
      <Footer>
        <div className="logo-box">
          <img alt='imagem' src={logoFooter} alt='Logo'/>
          <span>CNPJ: 04.487 685/0001-01</span>
        </div>
        <div className="copy-box">
          <span>Copyright 2021 ?? Renee Trajar - Todos os direitos reservados.</span>
        </div>
      </Footer>
      <WhatsappButton />
    </>
  );
}

export default App;
