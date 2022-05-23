import { returnEditProduct } from "../ports/returnProductReq.js";

export async function editProductReq(editId, body)
{
    try {

        var editData = await returnEditProduct(editId, body);

        if(editData != null)
        {
            return  {
            'statusCode': 200,
            'body': JSON.stringify(editData)
            }
        }
        else
        {
            return  {
                'statusCode': 500,
                'message': JSON.stringify({message: "internal server error"})
            }
        }

        
    } catch (error) {
        console.log(error);
        return error;
    }
}