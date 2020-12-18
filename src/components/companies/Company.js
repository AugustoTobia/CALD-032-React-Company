import React, { Component } from 'react';
import CompanyData from './CompanyData';
import propTypes from 'prop-types';

export class Company extends Component {
    render() {
        return(
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Fiscal Address</th>
                        <th>Cuit</th>
                        <th>Company ID</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.companies.map((company) => 
                    <CompanyData key={company.id} company={company} selectCompany={this.props.selectCompany} delCompany={this.props.delCompany} />
                )}
                </tbody>
            </table>
        </div>
        )
    }
}

Company.propTypes = {
    companies: propTypes.array.isRequired,
}

export default Company
