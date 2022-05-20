import { returnProductReq } from '../ports/returnProductReq.js'


export async function getProductReq(productId)
{
        try {

            const product = await returnProductReq(productId);

            if(product == null)
                return  {
                    'StatusCode': 404,
                    'body': JSON.stringify({message: "Product doesn't exist!"})
                }

            const res = {
                'StatusCode': 200,
                'body': JSON.stringify(product)
            }

            return res;
            
        } catch (error) {
            const err = {
                'StatusCode': 500,
                'body': JSON.stringify({message: err.message})
            }

            return err;
        }
}