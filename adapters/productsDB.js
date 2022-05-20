import AWS from '/var/runtime/node_modules/aws-sdk/lib/aws.js'
import { v4 as uuidv4 } from 'uuid';


const db = new AWS.DynamoDB.DocumentClient()
const TableName = process.env.TABLE_NAME

export async function getFinalData(productId)
{
    const Key = { id: productId };
    try {
        const data = await db.get({ TableName, Key }).promise();

        return data.Item;
        
    } catch (error) {
        
    }
}

export async function getAllFinalData()
{
    try {
        let params = {
            TableName : TableName,
            Select: "ALL_ATTRIBUTES"
        }

        const usersData = await db.scan(params).promise();
        
        return usersData
        
    } catch (error) {
        console.log(error);
        return error;
        
    }
}

export async function deleteDataInAdapterDB(deleteId)
{
    const Key = { id: deleteId };
    try {
        const data = await db.delete({ TableName, Key }).promise();

        return data;
        
    } catch (error) {
        console.log(error);
        return error;
    }
        
}

export async function postDataInAdapterDB(body)
{
    try {
    
            const item = {
              id: uuidv4(),
              description: body.description,
              inStock: body.inStock,
              price: body.price,
              review: body.review,
              title: body.title
            }

            await db.put({Item: item, TableName}).promise();


            return item;


    } catch (error) {
        console.log(error);
    }
}

export async function editDataInAdapterDB(editId, body)
{
    try {
    
            const item = {
              id: editId,
              description: body.description,
              inStock: body.inStock,
              price: body.price,
              review: body.review,
              title: body.title
            }

            await db.put({Item: item, TableName}).promise();


            return item;


    } catch (error) {
        console.log(error);
    }
}