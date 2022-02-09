import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "util/connection";
import httpHandler from "util/httpHandler";
import { ResponseFuncs } from "../../../../util/types";

// Potential Responses
const methodHandlers: ResponseFuncs = {

  // RESPONSE FOR GET REQUESTS
  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    const map = await Map.findById(req.query.mapId)
    res.json(map)
  },

  // RESPONSE POST REQUESTS
  PUT: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    res.json(await Map.findByIdAndUpdate(req.query.mapId, req.body))
  },

  // RESPONSE DELETE REQUESTS
  DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    res.json(await Map.findByIdAndRemove(req.query.mapId))
  }
}


export default httpHandler(methodHandlers)