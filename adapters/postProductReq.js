import { returnPostProduct } from "../ports/returnProductReq.js";


export async function postProductReq(body)
{
    try {

        var postData = await returnPostProduct(body)

        console.log("postproductreq")
        console.log(postData)

        if(postData != null)
        return  {
            'StatusCode': 200,
            'body': JSON.stringify(postData)
        }
        else
        {
            res = {
                'statusCode': 401,
                'body': JSON.stringify({message: "not found"})
                  } 
        }

        return postData;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}