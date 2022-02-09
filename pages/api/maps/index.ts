import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "util/connection";
import httpHandler from "util/httpHandler";
import { ResponseFuncs } from "../../../util/types";

// Potential Responses
const methodHandlers: ResponseFuncs = {

  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    const maps = await Map.find(req.query)
    res.json(maps)
  },

  // RESPONSE POST REQUESTS
  POST: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Map } = await connect()
    res.json(await Map.create(req.body))
  },
}

export default httpHandler(methodHandlers)