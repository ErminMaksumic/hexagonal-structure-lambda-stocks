import {returnDeletedProduct} from '../ports/returnProductReq.js'

export async function deleteProductReq(deleteId)
{

    try {

        await returnDeletedProduct(deleteId)

        if(deleteProduct != null)
        {
            return  {
            'StatusCode': 200,
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