import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Company extends Component {
    render() {
        const {id, companyName, cuit, email, fiscalAddress} = this.props.company;
        
        return (
            <div className="Company" >
                <div className="data">
                {this.props.company.companyName}
                </div>
                <div>
                {this.props.company.email}
                </div>
                <div className="data">
                {this.props.company.fiscalAddress}
                </div>
                <div className="data">
                {this.props.company.cuit}
                </div>
                <div className="data">
                {this.props.company.id}
                </div>
                <div className="data">
                    <button className="xBtn" onClick={this.props.delCompany.bind(this, id)}>X</button>
                </div>
                <div className="data">
                    <button className="xBtn" onClick={this.props.delCompany.bind(this, id)}>EDIT</button>
                </div>

            </div>
        )
    }
}

Company.propTypes = {
    company: propTypes.object.isRequired,
}

export default Company
