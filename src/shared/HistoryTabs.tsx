import { leaguesInterface } from "../interfaces/leagues";
import {FaGratipay,FaTimes} from 'react-icons/fa';
import { styles } from '../styles/styles';

export default function HistoryTabs({leagues}:{leagues:leaguesInterface}) {

const {IconsHistory, CardHistory, ImgCol, ImgHistory, TextImg} = styles

const leagueCards = leagues
const sliceText = (data:string) => {
  const resp = data.substring(data.length-14,data.length)
  return resp
};

  return(
   <CardHistory className="row rounded mx-1 my-3">
        <ImgCol className="col-10 rounded">
          <ImgHistory src={leagueCards.strBadge} className="rounded w-100" alt=""></ImgHistory>
          <TextImg className="rounded-bottom">
            <span className="mx-3">{sliceText(leagueCards.strLeague)}</span>
          </TextImg>
        </ImgCol>
        <div className="col-2 my-auto text-center">
        {
          leagueCards.isLike ?
          <IconsHistory>
              <FaGratipay/>
          </IconsHistory>
          :
          <IconsHistory className=" text-danger">
              <FaTimes/>
          </IconsHistory>
        
        }
        </div>
    </CardHistory>
  )
}