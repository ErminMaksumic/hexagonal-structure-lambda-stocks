import getStocksRequest from "./adapters/getStockRequests.js";
import { getProductReq } from "./adapters/getProductRequest.js";
import { getAllProductsReq } from "./adapters/getAllProductsReq.js";
import { deleteProductReq } from "./adapters/deleteProductReq.js";
import { postProductReq } from "./adapters/postProductReq.js";
import { editProductReq } from "./adapters/editProductReq.js";
//import { uuid } from 'uuidv4';



export async function hello(event) {

/*
  const res = await getStocksRequest(id);
  if(res==null)
  {
    return {message: "Not found"}
  }*/

  try {
    switch (event.routeKey) {
      case "GET /products/getById/{id}":
        const id = event.pathParameters.id;
        return await getProductReq(id);
        /*const res = await getProductReq(id);
        result = {
          'statusCode' : 200,
          'body': JSON.stringify({
              prod: res
          })
          }
          return result;
*/
      case "GET /products":
        return await getAllProductsReq();
        
      case "DELETE /products/delete/{id}":
        const delId = event.pathParameters.id;
        return await deleteProductReq(delId);

      case "POST /products/post":
        return await postProductReq(JSON.parse(event.body));

      case "PUT /products/edit/{id}":
        const updId = event.pathParameters.id;
        return await editProductReq(updId, JSON.parse(event.body));

      default:
       return {
          'statusCode' : 404,
          'body': JSON.stringify({message: "Invalid path"})
        } 
    }
  } catch (error)
   {
    return {
      'statusCode' : 500,
      'body': JSON.stringify({message: "Internal server error"})
    } 
   }
}