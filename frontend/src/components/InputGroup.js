import React from 'react';
import classnames from 'classnames'

const InputGroup = ({ label, type, name, onChangeHandler, errors, value }) => {
    return (
        <div className="mb-3">
            <label for="Tribunal" className="form-label">{label}</label>
            <input type={type} value={value} className={(classnames("form-control", {"is-invalid" : errors}))} name={name} onChange={onChangeHandler} />
            {
                errors && (
                    <div class="invalid-feedback">
                        {errors}
                    </div>
                )
            }
        </div>
    );
};

export default InputGroup;