import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "utils/connection";
import httpHandler from "utils/httpHandler";
import { ResponseFuncs } from "../../../utils/types";

// Potential Responses
const methodHandlers: ResponseFuncs = {

  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Location } = await connect()
    const location = await Location.findById(req.query.id)
    res.json(location)
  },
  
  PUT: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Location } = await connect()
    const location = await Location.findByIdAndUpdate(req.query.id, req.body, { new: true })
    res.json(location)
  },

  DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Location } = await connect()
    res.json(await Location.findByIdAndDelete(req.query.id))
  }

}

export default httpHandler(methodHandlers)