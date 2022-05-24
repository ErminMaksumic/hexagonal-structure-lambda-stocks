import {getDataFromAdapterDB, getAllDataFromAdapterDB, deleteProductInAdapterDB, postProductInAdapterDB, editProductInAdapterDB} 
from '../ports/productRepository.js'
import { getCurrencies } from '../ports/currencyPort.js';

export async function retrieveProductData(productId, query = undefined){
    try {

        const retrievedData = await getDataFromAdapterDB(productId);

        if(query!=undefined)
        {
        const currencies = await getCurrencies(query); // get BAM values

        const temp = retrievedData.price

        retrievedData.price = currencies * temp; // 0.5 x 2.1   :/

        }

        return retrievedData;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}


export async function retrieveAllProductData(){
    try {
        const retrievedAllData = await getAllDataFromAdapterDB();

        return retrievedAllData;
    } catch (error) {
        console.log(error);
        return error;
    }
}


export async function deleteProduct(deleteId)
{
    try {
        const retrievedDeletedProd = await deleteProductInAdapterDB(deleteId);

        return retrievedDeletedProd;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function postProduct(body)
{
    try {

        const retrievePostProduct = await postProductInAdapterDB(body);

        return retrievePostProduct;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function editProduct(editId, body)
{
    try {

        const retrievePostProduct = await editProductInAdapterDB(editId, body);

        return retrievePostProduct;
    } catch (error) {
        console.log(error);
        return error;
    }
}