import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "utils/connection";
import httpHandler from "utils/httpHandler";
import { ResponseFuncs } from "../../../../utils/types";

// Potential Responses
const methodHandlers: ResponseFuncs = {

  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    const map = await Map.findById(req.query.id).populate('locations')
    res.json(map)
  },
  
  PUT: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    const map = await Map.findByIdAndUpdate(req.query.id, req.body, { new: true })
    res.json(map)
  },

  DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    res.json(await Map.findByIdAndRemove(req.query.id))
  }

}


export default httpHandler(methodHandlers)