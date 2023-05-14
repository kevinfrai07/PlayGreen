import styled from 'styled-components'

interface darkModeProps{
    isDark : boolean
}

/**
 * Login
 */


const InpustLogin = styled.input<darkModeProps>`
background-color: ${(props) => (props.isDark ? '#26435f' : '#fff')};
color: white;
`;

const LblInput = styled.label<darkModeProps>`
color: ${(props) => (props.isDark ? '#c0bfbf' : '#26435f')};
`;

const PText = styled.p<darkModeProps>`
color: ${(props) => (props.isDark ? '#c0bfbf' : '#26435f')};
`;

const BtnGoogle = styled.button<darkModeProps>`
font-size: 30px;
border: none;
background: none;
color: ${(props) => (props.isDark ? '#ffffffb5' : '#26435f')};
`;

/*Se herada para las Imagenes*/
const Img = styled.img` 
object-fit: contain !important;
`;

/**
 * Home
 */
const AppDiv = styled.div`
height: 100vh;
margin-top: 30vh;
font-family: 'DM Sans'
`;

const Title = styled.h1<darkModeProps>`
font-size: 3rem;
color: ${(props) => (props.isDark ? '#ffffffb5' : '#26435f')};
`;

const HomeImage = styled(Img)<darkModeProps>`
object-fit: fill;
height: 66vh;
background-color: ${(props) => (props.isDark ? '#fff' : '#26435f')};
`;

const TextImgHome = styled.div`
color: #000;
position: relative;
bottom: 8vh;
font-size: 2rem;
background-color: rgb(255, 255, 255, 0.9);
opacity: .5;
height: 8vh;
border-bottom-right-radius: 1rem;
border-bottom-left-radius: 1rem;
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
const Botonprincipal = styled.button<darkModeProps>`
background: ${(props) => (props.isDark ? '#fff' : '#222243')};
height: 3rem;
border-radius: 1rem;
width: 3rem;
color: #e3ff00;
border: solid #222243;
`;

const ContenedorLike = styled.div`
height: 34vh;
width: 100%;
`;

const Close = styled.div`
font-size:  41px;
`;

const CloseIcon = styled.button<darkModeProps>`
border: none;
background: none;
color: ${(props) => (props.isDark ? '#D36060' : '#fff')};
`;


const Favorite = styled(CloseIcon)`
font-size: 61px;
color: #236BFE;
`;

/**
 * Loader
 */

const DivLoader = styled.div`
object-fit: fill;
height: 66vh;
`;

const Loader = styled.div`
position: fixed;
bottom: 60%;
`;

/**
 * History
 */
const ContentCards = styled.div`
overflow-y: auto;
min-height: 70vh;
max-height: 70vh;
`;

const IconsHistoryLeft = styled.button<darkModeProps>`
color: ${(props) => (props.isDark ? '#fff' : '#212529')};
font-size: 30px;
background: none;
border: none;
`;

const ContentIcon = styled.div<darkModeProps>`
background-color: ${(props) => (props.isDark ? '#212529' : '#fff')};
height: 100%;
`;

const IconsHistory = styled.button`
font-size: 35px;
color: #2067F8;
background: none;
border: none;
margin-top: 3vh
`;

const IconsHistoryTab =  styled.button<darkModeProps>`
font-size: 35px;
color: ${(props) => (props.isDark ? '#fff' : '#2067F8')};
background: none;
border: none;
margin-top: 3vh
`;

const CardHistory = styled.div<darkModeProps>`
height: 13vh;
background-color: ${(props) => (props.isDark ? '#212529' : '#fff')};
`;

const ImgCol = styled.div<darkModeProps>`
padding-left: 0 !important;
padding-right: 0 !important;
background-color: ${(props) => (props.isDark ? '#212529' : '#fff')};
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

/**
 * Footer
 */

const Footer = styled.div`
position: absolute;
bottom: 1rem;
width: 100%;
`;

const TabsIcons = styled.div<darkModeProps>`
background-color: ${(props) => (props.isDark ? '#fff' : '#2C2B3E')};
height: 8vh;
width: 90%;
`;

const IconTab = styled.button`
border: none;
background: none;
font-size: 25px;
color: #777777;
`;

export const styles = {
    InpustLogin,
    LblInput,
    PText,
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
    ContentIcon,
    IconsHistory,
    IconsHistoryTab,
    CardHistory,
    ImgCol,
    ImgHistory,
    TextImg}