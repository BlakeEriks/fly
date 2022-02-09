import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "util/connection";
import httpHandler from "util/httpHandler";
import { ResponseFuncs } from "../../../../../util/types";

// Potential Responses
const methodHandlers: ResponseFuncs = {

  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Location } = await connect()
    const location = await Location.findById(req.query.locationId)
    res.json(location)
  },

  DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map, Location } = await connect()
    res.json(await Location.findByIdAndRemove(req.query.locationId))
  }

}


export default httpHandler(methodHandlers)