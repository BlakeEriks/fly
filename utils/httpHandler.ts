import { NextApiRequest, NextApiResponse } from "next"
import { ResponseFuncs } from "./types"

const httpHandler = (methodHandlers: ResponseFuncs) => {

  return async (req: NextApiRequest, res: NextApiResponse) => { 

      //capture request method, we type it as a key of ResponseFunc to reduce typing later
      const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

      //function for catch errors
      const catcher = (error: Error) => res.status(400).json({ error })
      
      const response = methodHandlers[method]

      if (response) {
        return new Promise<void>(async (resolve) => {
          await response(req, res).catch(catcher)
          return resolve()
        })
      }
      else res.status(400).json({ error: "No Response for This Request" })
    }
}

export default httpHandler