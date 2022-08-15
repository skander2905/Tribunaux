import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InputGroup from '../components/InputGroup';

import axios from 'axios'


const Details = () => {

    const [tribunaux, setTribunaux] = useState([])
    const [form, setForm] = useState({})
    const { id } = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get('/api/Tribunaux')
            .then(res => {
                setTribunaux(res.data)
            })
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`/api/Tribunaux/${id}`, form)
            .then(res => {
                navigate('/')
            })
            .catch(err => setErrors(err.response.data))
    }
    useEffect(() => {
        axios.get(`/api/Tribunaux/${id}`)
            .then((res) => {
                setForm(res.data)
            })
    }, [])
    return (
        <div className="container mt-4 col-12 col-lg-4">
            <form onSubmit={onSubmitHandler}>
                <InputGroup label="Tribunal" type="text" name="Tribunal" onChangeHandler={onChangeHandler} errors={errors.Tribunal} value={form.Tribunal} />
                <button className="btn btn-primary" type='submit'>Modifier Tribunal</button>
            </form>

        </div>
    );
};

export default Details;