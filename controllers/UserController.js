const { User } = require('../models')

class UserController {

    static personal(req, res) {
        const { 
            fullName,
            gender,
            dateOfBirth,
            email,
            phoneNumber,
            testResult,
            visitedHospital
        } = req.body
        User.create({
            fullName,
            gender,
            dateOfBirth,
            email,
            phoneNumber,
            testResult,
            visitedHospital
        })
            .then(user => {
                res.status(200).json({user})
            })
            .catch(err => {
                res.status(500).json({
                    name: "error"
                })
            })
    }

    static getData (req,res) {
        User.findAll()
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            res.status(500).json({
                name: "error"
            })
        })
    }
}

module.exports = UserController