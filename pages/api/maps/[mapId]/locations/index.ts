import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "util/connection";
import httpHandler from "util/httpHandler";
import { ResponseFuncs } from "../../../../../util/types";

  // Potential Responses
const methodHandlers: ResponseFuncs = {

  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    const map = await Map.findById(req.query.mapId).populate('locations')
    if (map) {
      res.json({locations: map.locations})
    }
    else {
      res.json({error: "No map found"})
    }
  },

  POST: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map, Location } = await connect()
    const location = await Location.create(req.body)
    await Map.updateOne({_id: req.query.mapId},
      { $push: { locations: location._id } })
    res.json(location)
  }
}

export default httpHandler(methodHandlers)