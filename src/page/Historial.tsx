import { FaTimesCircle, FaGratipay, FaArrowLeft } from "react-icons/fa";
import "../App.css";
import FooterTabs from "../shared/FooterTabs";
import futbol from "../assets/futbol.jpg"
import { useNavigate } from "react-router-dom";

export default function Historial(props:any) {
  const {setIsAuth} = props;
  const navigate = useNavigate()
  const returnHome = (e:any) => {
     e.preventDefault();
     navigate("/home");

 };

  return(
  <div className="Historial">
   <div>
      <button className="iconsHistoryLeft mx-1" onClick={(e) => returnHome(e)}>
         <FaArrowLeft/>
      </button>
   </div>
   <div className="container my-5">
      <h1 className='fw-bold title'>History</h1>
      <p className="text-break"> 
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Placeat, cumque. Id, blanditiis! 
      </p>
      <div className="row cardHistory rounded mx-1">
         <div className="col-10 imgCol">
            <img src={futbol} className="rounded imgHistory w-100" alt="No hay más Ligas"></img>
         </div>
         <div className="col-2 my-auto text-center">
            <button className="iconsHistory">
               <FaGratipay/>
            </button>
          </div>
      </div>
   </div>
  <FooterTabs setIsAuth={setIsAuth}></FooterTabs>
 </div>)
}