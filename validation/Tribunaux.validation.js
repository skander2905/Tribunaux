const isEmpty = require('./isEmpty');
const validator = require('validator');




module.exports = function ValidateTribunal(data) {
    let errors = {}
    data.Tribunal = !isEmpty(data.Tribunal) ? data.Tribunal : ""



    if (validator.isEmpty(data.Tribunal)) {
        errors.Tribunal = "Required "
    }



    return {
        errors,
        isValid: isEmpty(errors)
    }
}