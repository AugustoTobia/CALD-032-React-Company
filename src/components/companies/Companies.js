import React, { Component } from 'react';
import Company from './Company';
import propTypes from 'prop-types';

export class Companies extends Component {
    render() {
        return(
        <container className="table">
            <table>
                <tr>
                    <th>company Name</th>
                    <th>Email</th>
                    <th>Fiscal Address</th>
                    <th>Cuit</th>
                    <th>Company ID</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
                <tbody>
                {this.props.companies.map((company) => 
                    <Company key={company.id} company={company} delCompany={this.props.delCompany} />
                )}
                </tbody>
            </table>
        </container>
        )
    }
}

Companies.propTypes = {
    companies: propTypes.array.isRequired,
}

export default Companies
