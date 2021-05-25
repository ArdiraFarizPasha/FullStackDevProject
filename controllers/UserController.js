const { User } = require('../models')

class UserController {

    static personal(req, res) {
        const { 
            fullName,
            gender,
            dateOfBirth,
            email,
            phoneNumber,
            visitedHospital
        } = req.body
        User.create({
            fullName,
            gender,
            dateOfBirth,
            email,
            phoneNumber,
            visitedHospital
        })
            .then(user => {
                res.status(200).json({
                    id: user.id
                })
            })
            .catch(err => {
                res.status(500).json({
                    name: err
                })
            })
    }

    static getData (req,res) {
        User.findAll({
            include: 'Symptom'
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            res.status(500).json({
                name: err
            })
        })
    }

    static getDataById (req,res) {
        let id = +req.params.id
        User.findByPk(id,{
            include: 'Symptom'
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            res.status(500).json({
                name: err
            })
        })
    }
}

module.exports = UserController
