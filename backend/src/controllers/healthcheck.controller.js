
import {asyncHandler} from "../utils/asyncHandler.js"


const healthcheck = asyncHandler(async (req, res) => {
    // a healthcheck response that simply returns the OK status as json with a message
})

export {
    healthcheck
    }
    