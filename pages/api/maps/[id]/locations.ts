import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "utils/connection";
import httpHandler from "utils/httpHandler";
import { ResponseFuncs } from "../../../../utils/types";

// Potential Responses
const methodHandlers: ResponseFuncs = {

  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    const map = await Map.findById(req.query.id).populate('locations')
    res.json({locations: map.locations})
  },

  POST: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map, Location } = await connect()
    const location = await Location.create(req.body)
    await Map.updateOne({_id: req.query.id},
      { $push: { locations: location._id } })
    res.json(location)
  }

}


export default httpHandler(methodHandlers)