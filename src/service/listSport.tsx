import axios from "axios";

const EndPoint = "https://www.thesportsdb.com/api/v1/json/3";

export const getSearchLeagues = async () => {
    const url = `${EndPoint}/search_all_leagues.php?c=England&s=Soccer`;
    const resp =  await axios.get(url);
    return resp.data;
};
