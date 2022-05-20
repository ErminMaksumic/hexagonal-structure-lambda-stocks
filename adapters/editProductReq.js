import { returnEditProduct } from "../ports/returnProductReq.js";

export async function editProductReq(editId, body)
{
    try {

        var editData = await returnEditProduct(editId, body);

        if(editData != null)
        {
            return  {
            'StatusCode': 200,
            'body': JSON.stringify(editData)
            }
        }
        else
        {
            return  {
                'StatusCode': 404,
                'message': JSON.stringify({message: "not found"})
            }
        }

        
    } catch (error) {
        console.log(error);
        return error;
    }
}