import futbol from "../assets/futbol.jpg"
import FooterTabs from "../shared/FooterTabs"
import {FaGratipay,FaTimesCircle,FaSun,FaMoon} from 'react-icons/fa';


export default function Home(props) {
  const {setIsAuth} = props;

  const verListas = () =>{
    console.log("dio click")
  }

  return (
    <>
    <div className="contenedorimgPrincipal">
      <div className="contenedorButton">
        <button onClick={() =>verListas()} className="botonprincipal"><FaMoon/></button>
      </div>
      <img src={futbol} className="rounded w-100 d-block homeImage" alt=""></img>
      <figcaption className="figure-caption">A caption for the above image.</figcaption>
    </div>
    <div className="contenedorLike">
      <div className="row my-5">
        <div className="col-6 text-end close my-auto">
          <button className="closeIcon">
            <FaTimesCircle/>
          </button>
        </div>
        <div className="col-6">
          <button className="closeIcon favorite">
            <FaGratipay/>
          </button>
        </div>
      </div>
    </div>
     <FooterTabs setIsAuth={setIsAuth}></FooterTabs>
    </>
  )
}
