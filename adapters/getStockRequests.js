import getById from "../ports/drivingPortStock.js";


async function getStocksRequest(stockID){
    let res;

    try {   
        const stockData = await getById(stockID)
        console.log("stock data - > ")

        if(stockData == null)
       { 
           return null;
        }
        
        res = {
            'statusCode': 200,
            'body': JSON.stringify(stockData)
        }


    } catch (err) {
        console.log(err);
        return err;
    }

    console.log(res)

    return res;
} 

export default getStocksRequest;