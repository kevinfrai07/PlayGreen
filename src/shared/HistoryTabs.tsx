import { leaguesInterface } from "../interfaces/leagues";
import {FaGratipay,FaTimesCircle} from 'react-icons/fa';

export default function HistoryTabs({league}:{league:leaguesInterface}) {

const leagueCards = league

  return(
   <div className="row cardHistory rounded mx-1 my-1">
        <div className="col-10 imgCol">
          <img src={leagueCards.strBadge} className="rounded imgHistory w-100" alt=""></img>
        </div>
        <div className="col-2 my-auto text-center">
        {
          leagueCards.isLike ?
          <button className="iconsHistory">
              <FaGratipay/>
          </button>
          :
          <button className="iconsHistory">
              <FaTimesCircle/>
          </button>
        
        }
        </div>
    </div>
  )
}