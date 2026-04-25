
import {asyncHandler} from "../utils/asyncHandler.js"

const getUserData = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, { user: req.user }, "User data"));
})

const getUserHistory = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, { user: req.user }, "User history"));
})

export {
    getUserData, 
    getUserHistory
    }