import {getFinalData, getAllFinalData, deleteDataInAdapterDB, postDataInAdapterDB, editDataInAdapterDB} from "../adapters/productsDB.js"

export async function getDataFromAdapterDB(productId){

    try {
        
        const data = getFinalData(productId)

        return data;

    } catch (error) {
        
    }
}

export async function getAllDataFromAdapterDB(){

    try {
        
        const data = await getAllFinalData()

        return data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function deleteProductInAdapterDB(deleteId)
{
    try {
        
        const data = await deleteDataInAdapterDB(deleteId)

        return data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function postProductInAdapterDB(body)
{
    try {
        
        const data = await postDataInAdapterDB(body)

        return data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function editProductInAdapterDB(editId, body)
{
    try {
        
        const data = await editDataInAdapterDB(editId, body)

        return data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

