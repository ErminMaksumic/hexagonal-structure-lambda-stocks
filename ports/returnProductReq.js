import { retrieveProductData, retrieveAllProductData, deleteProduct, postProduct, editProduct } from '../domains/productLogic.js'

export async function returnProductReq(productId, query = undefined)
{
    try {

    var productData = await retrieveProductData(productId, query)

    return productData;
        
    } catch (error) {
        console.log(error)
    }
}

export async function returnAllProductReq()
{
    try {
        var allProductData = await retrieveAllProductData();

        return allProductData;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function returnDeletedProduct(deleteId)
{
    try {

        const data = await deleteProduct(deleteId);

        return data;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function returnPostProduct(body)
{
    try {

        const data = await postProduct(body);

        return data;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function returnEditProduct(editId, body)
{
    try {

        const data = await editProduct(editId, body);

        return data;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}
