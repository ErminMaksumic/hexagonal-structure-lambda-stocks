"use strict";
import getStocksRequest from "./adapters/getStockRequests.js";

export async function hello(event) {

  const id = event.pathParameters.id;

  const res = await getStocksRequest(id);

  if(res==null)
  {
    return {message: "Not found"}
  }

  return res;
}