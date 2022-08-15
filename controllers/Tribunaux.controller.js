const Tribunaux = require('../models/Tribunaux.models')
const ValidateTribunal = require('../validation/Tribunaux.validation')



const AddTribunal = async (req, res) => {
    const { errors, isValid } = ValidateTribunal(req.body)
    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            await Tribunaux.findOne({ Tribunal: req.body.Tribunal })
                .then(async (exist) => {
                    if (exist) {
                        errors.Tribunal = "Tribunal Exist"
                        res.status(404).json(errors)
                    } else {
                        await Tribunaux.create(req.body)
                        res.status(201).json({ message: 'Tribunal added with success' })
                    }
                })

        }

    } catch (error) {
        console.log(error.message)
    }
}

const FindAllTribunaux = async (req, res) => {
    try {
        const data = await Tribunaux.find()
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const findSingleTribunal = async (req, res) => {
    try {
        const data = await Tribunaux.findOne({ _id: req.params.id })
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const UpdateTribunal = async (req, res) => {
    const { errors, isValid } = ValidateTribunal(req.body)

    try {
        await Tribunaux.findOne({ Tribunal: req.body.Tribunal })
            .then(async (exist) => {
                if (exist) {
                    errors.Tribunal = "Tribunal Exist"
                    res.status(404).json(errors)
                } else {
                    const data = await Tribunaux.findOneAndUpdate(
                        { _id: req.params.id },
                        req.body,
                        { new: true }
                    )
                    res.status(201).json(data)
                }
            })

    } catch (error) {
        console.log(error.message)
    }

}

const DeleteTribunal = async (req, res) => {
    try {
        await Tribunaux.deleteOne({ _id: req.params.id })
        res.status(201).json({ message: "Tribunal Deleted with success" })
    } catch (error) {
        console.log(error.message)
    }


}

module.exports = {
    AddTribunal,
    FindAllTribunaux,
    findSingleTribunal,
    UpdateTribunal,
    DeleteTribunal
}