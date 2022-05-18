import retrieveStockValues from "../domains/stockLogic.js";


const getById = async (stockID) => {
    try{
        console.log("id -> " + stockID)
        const stockValues =  retrieveStockValues(stockID)
        return stockValues;
    }
    catch(err){
        return err
    }
}

export default getById;