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

function App() {
  return (
    <>
      <Header />
      <Container background='red' padding='20px'>
        <MottoDiv>
          <h2>
            Elegante é ter um
          </h2>
          <h1>
            Alfaiate
          </h1>
          <h2>
            para chamar de seu.
          </h2>
          <h3>
            COMPRE HOJE, <b>PAGUE EM ATÉ 3x COM 12% DE DESCONTO</b> E TENHA 10 MESES PARA CONFECCIONAR!
          </h3>
          <StyledButton background='#117799' color="white" onHoverBackground='transparent' 
          onHoverBorder= '1px solid yellow'>
            FAÇA JÁ UM ORÇAMENTO
          </StyledButton>
        </MottoDiv>

      </Container>
      <Container background='white' padding='60px' display='flex'>
        <img src={photo}></img>
        <AboutDiv>
          <h2>Renee Trajar</h2>
          <p>
            Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, 
            possuímos profissionais experientes e altamente qualificados
          </p>
          <p>
            Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas
            tiradas pelo próprio Sr.Renee no escritorio ou residência do cliente.
          </p>
          <p>
            "Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar
            nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.
            "
          </p>
          <p>
            Renee Trajar
          </p>
          <StyledButton>
            Agende uma visita!
          </StyledButton>
        </AboutDiv>
      </Container>
      <Container>
        <ReviewDiv>
          <div className="reviewBox">
            <h3>
              "Faço roupa com o Renee Trajar há mais de duas décadas, o serviço é impecavel em todos os detalhes,
              desde a costura ao caimento. O Renee tem uma equipe de mestre!"
            </h3>
            <h3>Nelson Garey</h3>
            <h4>Advogado | Nelson Garey Advogados Associados</h4>
            <img classname='principalImage' src={placeholder}/> 
          </div>
        </ReviewDiv>
          <IconsDiv>
            <Icons>
              <img src={placeholder}/>
              <span>Qualidade</span>
              <span>Camisaria e Alfaiataria 100% artesanal.</span>
            </Icons>
            <Icons>
              <img src={placeholder}/>
              <span>Confiança</span>
              <span>Atendimento personalizado no escritorio ou residência</span>
            </Icons>
            <Icons>
              <img src={placeholder}/>
              <span>Experiência</span>
              <span>Tradição e modernidade proporcionando a elegância</span>
            </Icons>
          </IconsDiv>
      </Container>
      <Container background='green' padding=' 10px 20px' display='flex'>
        <PromoDiv>
          <h1>CONDIÇÃO IMPERDÍVEL</h1>
          <h2>Compre hoje e garanta: </h2>
          <li>12% de desconto e pagamento em até <b>3x sem juros;</b></li>
          <li>Até <b>10 meses</b> para confeccionar sua roupa. Não se preocupe se suas medidas aumentarem
          ou diminuíram, estará sempre elegante;
          </li>
          <li> Condição muito especial por <b>tempo limitado;</b></li>
          <li>Poder presentear alguém com uma roupa de alta costura <b>exclusiva</b>.</li>

          <StyledButton color="white" background='#fff04f' onHoverBackground='#a19f8f'>
            Garanta essa condição especial!
          </StyledButton>
        </PromoDiv>
        <img 
        style=
        {{
          width: '15%',
          height: '90%'
        }} src={placeholder} />
      </Container>
      <Container display='flex' padding='140px 40px'>
        <CustomImageBox>
          <StyledImage background={placeholder}/>
        </CustomImageBox>
        <ServicoBox>
          <h1>Camisaria</h1>
          <h3>--CONFECCIONADAS ARTESANALMENTE</h3>
          <div className="lista" >
            <ul>
              <li>100% Algodão</li>
              <li>Monograma</li>
              <li>Slim</li>
            </ul>
            <ul>
              <li>Nacionais e Importadas</li>
              <li>Tradicionais e Esportivas</li>
              <li>Casamentos</li>
            </ul>
          </div>
          <StyledButton background='#118057' color="white" onHoverBackground='#0d402d'>
            Quero um orçamento
          </StyledButton>
        </ServicoBox>
      </Container>
      <Container display='flex' padding='140px 40px'>
        <ServicoBox>
          <h1>Alfaiataria</h1>
          <h3>--Totalmente Feito a mão e sob medida</h3>
          <div className="lista" >
            <ul>
              <li>Fio Super 120 e 130</li>
              <li>Lã fria Australiana</li>
              <li>Botões importados</li>
            </ul>
            <ul>
              <li>Ternos e Calças</li>
              <li>Paletós e Smokings</li>
              <li>Sociais e Essportivos</li>
            </ul>
          </div>
          <StyledButton background='#118057' color="white" onHoverBackground='#0d402d'>
            Quero um orçamento
          </StyledButton>
        </ServicoBox>
        <CustomImageBox>
          <StyledImage background={placeholder}/>
        </CustomImageBox>
      </Container>
      <Container background='green' display='flex' padding= '0px 80px'>
        <Carousel />
      </Container>
      <Container>

      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
