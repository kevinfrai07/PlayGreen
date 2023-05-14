import styled from 'styled-components'

const Body = styled.body`
overflow-y: hidden;
overflow-x: hidden;
background-color: #E5E5E5;
`;

/*Se herada para las Imagenes*/
const Img = styled.img` 
object-fit: contain !important;
`;

const AppDiv = styled.div`
height: 100vh;
margin-top: 30vh;
font-family: 'DM Sans'
`;

const Title = styled.h1`
font-size: 3rem;
`;

const HomeImage = styled(Img)`
object-fit: fill;
height: 66vh;
background-color: #212529;
`;

const TextImgHome = styled.div`
color: #000;
position: relative;
bottom: 8vh;
font-size: 2rem;
background-color: rgb(255, 255, 255, 0.9);
opacity: .5;
height: 8vh;
`;

const ContenedorimgPrincipal = styled.div`
position: relative;
max-height: 70vh;
min-height: 70vh;
`;
const ContenedorButton = styled.div`
position: absolute;
margin: 15px 15px 15px;
`;
const Botonprincipal = styled.button`
background: #fff /*#222243*/;
height: 3rem;
border-radius: 1rem;
width: 3rem;
color: #e3ff00;
border: none;
`;

const BtnGoogle = styled.button`
font-size: 30px;
border: none;
background: none;
`;

const ContenedorLike = styled.div`
height: 34vh;
width: 100%;
`;

const Close = styled.div`
font-size:  41px;
`;

const CloseIcon = styled.button`
border: none;
background: none;
`;

const DivLoader = styled.div`
object-fit: fill;
height: 66vh;
`;

const Loader = styled.div`
position: fixed;
bottom: 60%;
`;

const Favorite = styled(CloseIcon)`
font-size: 61px;
color: #236BFE;
`;

const Footer = styled.div`
position: absolute;
bottom: 1rem;
width: 100%;
`;

const TabsIcons = styled.div`
background-color: #fff;
height: 8vh;
width: 90%;
`;

const IconTab = styled.button`
border: none;
background: none;
font-size: 25px;
color: #777777;
`;

const ContentCards = styled.div`
overflow-y: auto;
min-height: 70vh;
max-height: 70vh;
`;

const IconsHistoryLeft = styled.button`
font-size: 30px;
background: none;
border: none;
`;

const IconsHistory = styled.button`
font-size: 35px;
color: #2067F8;
background: none;
border: none;
`;

const CardHistory = styled.div`
height: 13vh;
background-color: #fff;  
`;

const ImgCol = styled.div`
padding-left: 0 !important;
padding-right: 0 !important;
background-color: #212529;
height: inherit;
`;

const ImgHistory = styled(Img)`
height: 13vh;
`;

const TextImg = styled.div`
color: #000;
position: relative;
bottom: 1.5rem;
background-color: rgb(255, 255, 255, 0.9);
opacity: .5;
`;

export const styles = {
    Body,
    Img,
    AppDiv,
    Title,
    HomeImage,
    TextImgHome,
    ContenedorimgPrincipal,
    ContenedorButton,
    Botonprincipal,
    BtnGoogle,
    ContenedorLike,
    Close,
    CloseIcon,
    DivLoader,
    Loader,
    Favorite,
    Footer,
    TabsIcons,
    IconTab,
    ContentCards,
    IconsHistoryLeft,
    IconsHistory,
    CardHistory,
    ImgCol,
    ImgHistory,
    TextImg}