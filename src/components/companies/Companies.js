import React, { Component } from 'react'
import Company from './Company';
import propTypes from 'prop-types';

export class Companies extends Component {
    render() {
        console.log(this.props.companies)
        return this.props.companies.map((company) =>
        <div>
            <Company key={company.id} company={company} delCompany={this.props.delCompany} />
        </div>
        )
    }
}

Companies.propTypes = {
    companies: propTypes.array.isRequired,
}

export default Companies
