import axios from "axios";

export async function getData(query = null)
{
    const data = axios.get(`https://open.er-api.com/v6/latest/${query}`);

    return data;
}