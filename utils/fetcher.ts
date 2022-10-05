import axios from 'axios'

const apiKey = process.env.ODDS_API_KEY

export async function fetcher() {
    const queryKey = 'default'
    //  This costs 3 usage quota per call since it's for 3 regions & 1 market. (1x3)
    const url = `https://api.the-odds-api.com/v4/sports/soccer_uefa_champs_league/odds?apiKey=${apiKey}&regions=us,uk,eu&markets=h2h&dateFormat=iso&oddsFormat=decimal`
    // const url = "https://api.the-odds-api.com/v4/sports/soccer_uefa_champs_league/odds?apiKey=553d1ef08ad122a25442cbc12c5fd5a6&regions=us,uk,eu&markets=h2h&dateFormat=iso&oddsFormat=decimal"

    return {
        queryKey: queryKey,
        query: await axios.get(url).then(res => res.data)
    }
}
