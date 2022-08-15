import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom'


const RowDetails = ({ Tribunal, Service, Id, OnDelete }) => {

    return (
        <tr>
            <th>{Tribunal}</th>
            <td className="gap__actions">
                <span className="badge bg-info">
                    <Link to={`/${Id}/Services`} className="text-white">
                        <i > Services</i>
                    </Link>
                </span>
                <span className="badge bg-info">
                    <Link to={`/${Id}`} className="text-white">
                        <i className="fas fa-edit"></i>
                    </Link>
                </span>

                <span className="badge bg-danger" onClick={() => OnDelete(Id)}><i className="fas fa-trash-alt"></i></span>
            </td>
            
        </tr>
    );
};

export default RowDetails;