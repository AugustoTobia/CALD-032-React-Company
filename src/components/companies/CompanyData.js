import React, { Component } from 'react'
import propTypes from 'prop-types';

export class CompanyData extends Component {
    render() {
        const {id, companyName, cuit, email, fiscalAddress} = this.props.company;

        return (
            <tr className="tbody" >
                <td className="data">{companyName} </td>
                <td className="data">{email}</td>
                <td className="data">{fiscalAddress}</td>
                <td className="data">{cuit}</td>
                <td className="data">{id}</td>
                <td className="data">
                    <button className="xBtn" onClick={this.props.selectCompany.bind(this, id)}>EDIT</button>
                </td>
                <td className="buttons">
                    <button className="xBtn" onClick={this.props.delCompany.bind(this, id)}>X</button>
                </td>
            </tr>
        )
    }
}

CompanyData.propTypes = {
    company: propTypes.object.isRequired,
}

export default CompanyData
