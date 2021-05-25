const { Symptom } = require('../models')

class FormController {

    static addForm (req, res) {
        const {
            userId, 
            fever,
            breathingDifficulty,
            cough,
            runnyNose,
            losingSenseTaste,
            losingSenseSmell,
            bodyAches,
            vomitDiarrhea,
            testResult
        } = req.body
        Symptom.create({
            UserId: +userId, 
            fever,
            breathingDifficulty,
            cough,
            runnyNose,
            losingSenseTaste,
            losingSenseSmell,
            bodyAches,
            vomitDiarrhea,
            testResult
        })
            .then(symptom => {
                res.status(200).json({symptom})
            })
            .catch(err => {
                res.status(500).json({
                    name: err
                })
            })
    }
}

module.exports = FormController
