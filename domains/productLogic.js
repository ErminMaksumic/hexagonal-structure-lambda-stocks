import {getDataFromAdapterDB, getAllDataFromAdapterDB, deleteProductInAdapterDB, postProductInAdapterDB, editProductInAdapterDB} 
from '../ports/productRepository.js'

export async function retrieveProductData(productId){
    try {

        const retrievedData = await getDataFromAdapterDB(productId);

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