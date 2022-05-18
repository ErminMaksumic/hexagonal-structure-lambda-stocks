const stockData = [{id: 1, title: "stock1", price: 10 }, {id: 2, title: "stock2", price: 20}, {id: 3, title: "stock3", price: 30 } ]

const getStockValue = async (stockID) => {
    try {
        
        console.log(stockData.find(x=> x.id == stockID))
        return stockData.find(x=> x.id == stockID)
    }
    catch (err) {
        console.log(err)
        return err
    }
}


export default getStockValue;