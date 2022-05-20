import Repository from "../ports/drivenPortStock.js";

const retrieveStockValues = async (stockID) => {
    try{
        const stockValue = await Repository(stockID);
        if(stockValue == null)
        {return null;
        }

        const returnStock = {
            stockId: stockValue.id,
            stockTitle: stockValue.title,
            stockPrice: stockValue.price
        };

        console.log(returnStock)

        return returnStock;

    } catch(err) {
        return err;
    }
}

export default retrieveStockValues;