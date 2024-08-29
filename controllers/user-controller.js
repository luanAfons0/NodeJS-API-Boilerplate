import userService from '../services/user-service.js'

class UserController {
    getAllUsers(req, res) {
        const response = userService.getAllUsers()
        return res.status(200).send(response)
    }
}

export default new UserController()
