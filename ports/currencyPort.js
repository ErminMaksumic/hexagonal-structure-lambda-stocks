import { getData } from "../adapters/getCurrencies.js";

export async function getCurrencies(query = null)
{
    const data = await getData(query);

    return data;

}