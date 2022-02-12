import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "utils/connection";
import httpHandler from "utils/httpHandler";
import { ResponseFuncs } from "../../../utils/types";

  // Potential Responses
const methodHandlers: ResponseFuncs = {

  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const { Location } = await connect()
    res.json(await Location.find({}))
  }
}

export default httpHandler(methodHandlers)