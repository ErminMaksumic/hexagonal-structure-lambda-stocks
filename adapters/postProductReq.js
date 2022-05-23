import { returnPostProduct } from "../ports/returnProductReq.js";


export async function postProductReq(body)
{
    try {

        var postData = await returnPostProduct(body)


        if(postData != null)
        return  {
            'statusCode': 200,
            'body': JSON.stringify(postData)
        }
        else
        {
            res = {
                'statusCode': 500,
                'body': JSON.stringify({message: "internal server error"})
                  } 
        }

        return postData;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}