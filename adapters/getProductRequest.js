import { returnProductReq } from '../ports/returnProductReq.js'


export async function getProductReq(productId, query = undefined)
{
        try {

            const product = await returnProductReq(productId, query);

            if(product == null)
            {
                return{
                 'statusCode': 404,
                 'body': JSON.stringify({message: "Product doesn't exist!"})
                }
            }

            return {
                'statusCode': 200,
                'body': JSON.stringify(product)
            }
             
            
        } catch (error) {
            return {
                'statusCode': 500,
                'body': JSON.stringify({message: error.message})
            }
        }
}