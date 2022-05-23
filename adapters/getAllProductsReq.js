import {returnAllProductReq} from '../ports/returnProductReq.js'

export async function getAllProductsReq()
{
    let res;

    try {

        var prodData = await returnAllProductReq();

        if(prodData!=null){
            return  {
                'statusCode': 200,
                'body': JSON.stringify(prodData.Items)
               }}
        else
        {
            res = {
                'statusCode': 404,
                'body': JSON.stringify({message: "There are no products here!"})
                  } 
        }

        return res;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}