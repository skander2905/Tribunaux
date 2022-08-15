import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom'
import InputGroup from '../components/InputGroup';


function loop(Service) {
    var list = []
    for (var i = 0; i < Service.length; i++) {
        list.push(
            <>
                <tr>
                    <th>{Service[i].lieu}</th>
                    <th>{Service[i].lundi_a}</th>
                    <th>{Service[i].mardi_a}</th>
                    <th>{Service[i].mercredi_a}</th>
                    <th>{Service[i].jeudi_a}</th>
                    <th>{Service[i].vendredi_a}</th>
                    <th>{Service[i].samedi_a}</th>
                    <td className="gap__actions">
                        <span className="badge bg-info">
                            <a className="text-white">
                                <i className="fas fa-edit"></i>
                            </a>
                        </span>

                        <span className="badge bg-danger" ><i className="fas fa-trash-alt"></i></span>

                    </td>
                </tr>

            </>
        )
    }
    return (list)
}

const Services = () => {
    const [tribunaux, setTribunaux] = useState([])
    const { id } = useParams();

    const onSubmitHandler = () => {
        
    }

    useEffect(() => {
        axios.get('/api/Tribunaux')
            .then(res => {
                setTribunaux(res.data)
            })
    })
    return (
        <div className="row p-4">
            <div className="mt-4">
                <h2>Services</h2>
            </div>
            <div className="col-12 col-lg-4">
                <form onSubmit={onSubmitHandler}>
                    <input label="lieu" type="text" name="Service" />

                    <button className="btn btn-primary" type='submit'>Ajouter Service</button>
                </form>
            </div>
            <div className="col-12 col-lg-7">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>lieu</th>
                            <th scope='col'>lundi_a</th>
                            <th scope='col'>mardi_a</th>
                            <th scope='col'>mercredi_a</th>
                            <th scope='col'>jeudi_a</th>
                            <th scope='col'>vendredi_a</th>
                            <th scope='col'>samedi_a</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            tribunaux.map(({ Service, _id }) => (

                                (_id === id) ? loop(Service) : null

                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Services;