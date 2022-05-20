import getStockValueDB from "../adapters/stocksDB.js";


const getStockData = async (stockID) => {
    try{
        const data = await getStockValueDB(stockID);

        return data;
    } catch(err) {
        return err
    }
}


export default getStockData;
