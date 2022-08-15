import React, { useEffect, useState } from 'react';
import InputGroup from '../components/InputGroup';
import RowDetails from '../components/RowDetails';
import axios from 'axios'
import Alert from '../components/Alert';

const Home = () => {
    const [tribunaux, setTribunaux] = useState([])

    const [form, setForm] = useState({})

    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState("")
    const [show, setShow] = useState(false)

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/Tribunaux', form)
            .then(res => {
                setMessage(res.data.message)
                setShow(true)
                setTimeout(() => {
                    setShow(false)
                }, 4000);
            })
            .catch(err => setErrors(err.response.data))
    }
    useEffect(() => {
        axios.get('/api/Tribunaux')
            .then(res => {
                setTribunaux(res.data)
            })
    })

    const OnDelete = (id__) => {
        if (window.confirm("are you sure to delete this Tribunal ?")) {
            axios.delete(`/api/Tribunaux/${id__}`)
                .then(res => {
                    setMessage(res.data.message)
                    setShow(true)
                    setTimeout(() => {
                        setShow(false)
                    }, 4000);
                })
        }
    }
    return (

        <div className="row p-4">
            <Alert message={message} show={show} />
            <div className="mt-4">
                <h2>Tribunaux</h2>
            </div>
            <div className="col-12 col-lg-4">
                <form onSubmit={onSubmitHandler}>
                    <InputGroup label="Tribunal" type="text" name="Tribunal" onChangeHandler={onChangeHandler} errors={errors.Tribunal} />
                    <button className="btn btn-primary" type='submit'>Ajouter Tribunal</button>
                </form>
            </div>
            <div className="col-12 col-lg-7">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Tribunal</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tribunaux.map(({ Tribunal, Service, _id }) => (

                                <RowDetails Tribunal={Tribunal} Service={Service} Id={_id} OnDelete={OnDelete} />
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Home;