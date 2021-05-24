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
            vomitDiarrhea
        } = req.body
        {console.log(req.body, "body")}
        Symptom.create({
            UserId: userId,
            fever,
            breathingDifficulty,
            cough,
            runnyNose,
            losingSenseTaste,
            losingSenseSmell,
            bodyAches,
            vomitDiarrhea
        })
            .then(symptom => {
                res.status(200).json(symptom)
            })
            .catch(err => {
                res.status(500).json({
                    name: "error"
                })
            })
    }
}

module.exports = FormController
