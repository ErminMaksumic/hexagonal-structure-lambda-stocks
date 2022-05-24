import axios from "axios";

export async function getData(query = null)
{
    const exchange = await axios.get(`https://open.er-api.com/v6/latest/EUR`);

    const data = exchange.data

    return data.rates[query];
}