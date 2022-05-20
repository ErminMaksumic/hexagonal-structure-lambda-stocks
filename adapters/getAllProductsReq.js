import {returnAllProductReq} from '../ports/returnProductReq.js'

export async function getAllProductsReq()
{
    let res;

    try {

        var prodData = await returnAllProductReq();

        if(prodData!=null){
            return prodData;
        }
        else
        {
            res = {
                'statusCode': 401,
                'body': JSON.stringify({message: "not found"})
                  } 
        }

        return res;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}